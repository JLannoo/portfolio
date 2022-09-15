import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enMain from './assets/locales/en/main.json';
import enProjects from './assets/locales/en/projects.json';
import esMain from './assets/locales/es/main.json';
import esProjects from './assets/locales/es/projects.json';

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: false,
		resources: {
			en: {
				main: enMain,
				projects: enProjects,
			},
			es: {
				main: esMain,
				projects: esProjects,
			},
		},
		interpolation: {
			escapeValue: false,
		},
	});
