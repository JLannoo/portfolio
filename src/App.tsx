import React from 'react';
import './App.module.scss';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { useTheme } from './context/ThemeContext';

function App() {
	const { theme } = useTheme();

	return (
		<div className={'App ' + (theme)}>
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
