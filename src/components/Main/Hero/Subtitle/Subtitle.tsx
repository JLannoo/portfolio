import React from 'react';
import css from './Subtitle.module.scss';

export default function Subtitle() {
	const string = 'Fullstack Developer';
	const [text, setText] = React.useState('');

	React.useEffect(() => {
		const interval = setInterval(() => {
			if (text !== string) {
				setText(text + string[text.length]);
			} else {
				clearInterval(interval);
			}
		}, 150);

		return () => clearInterval(interval);
	}, [text]);

	return (
		<h2 className={css.Subtitle}>
			{text}
		</h2>
	);
}
