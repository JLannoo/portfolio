import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';

import App from './App';
import OgImage from './components/OgImage/OgImage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		{/* Route to ogimage view */}
		{import.meta.env.DEV && window.location.pathname === '/ogimage' ?
			<OgImage /> : <App />
		}
	</React.StrictMode>,
);
