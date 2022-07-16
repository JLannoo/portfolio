import React from 'react';
import { useTheme } from './context/ThemeContext';

function App() {
	const { theme } = useTheme();

	return (
		<div className={'App ' + (theme)}>
		</div>
	);
}

export default App;
