import React from 'react';
import './App.module.scss';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

import './i18n';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
