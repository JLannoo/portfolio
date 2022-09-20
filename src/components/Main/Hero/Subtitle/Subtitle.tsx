import React from 'react';
import css from './Subtitle.module.scss';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Subtitle() {
	const { t } = useTranslation('main');

	const string = t('hero_subtitle');
	const [text, setText] = React.useState('');
	const [timeoutNumber, setTimeoutNumber] = React.useState<NodeJS.Timeout>();

	React.useEffect(() => {
		clearTimeout(timeoutNumber);
		setText('');
	}, [i18next.language]);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			if (text.length < string.length) {
				setText(text + string[text.length]);
			} else {
				clearTimeout(timeoutNumber);
			}
		}, 150);

		setTimeoutNumber(timeout);

		return () => {
			clearTimeout(timeoutNumber);
		};
	}, [text]);

	return (
		<h2 className={css.Subtitle}>
			{text}
		</h2>
	);
}
