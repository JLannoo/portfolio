import React from 'react';
import { ThemeProviderProps } from '../types';

const getInitialTheme = () => {
	let theme = localStorage.getItem('theme');

	if (!theme) {
		theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
	}

	return theme;
};

const ThemeContext = React.createContext({
	theme: 'light',
	toggleTheme: () => {},
});

const useTheme = () => {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

const ThemeProvider:React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = React.useState(getInitialTheme());

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider, useTheme };
