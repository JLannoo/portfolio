import React from 'react';
import css from './Subtitle.module.scss';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Subtitle() {
	const { t } = useTranslation('main');

	const string = t('hero_subtitle');
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (text.length < string.length) {
				setText(text + string[text.length]);
			} else {
				clearInterval(interval);
			}
		}, 150);

		return () => {
			clearInterval(interval);
		};
	}, [text]);

	React.useEffect(() => {
		setText('');
	}, [i18next.language]);

	return (
		<h2 className={css.Subtitle}>
			{text}
		</h2>
	);
}
