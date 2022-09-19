import React from 'react';
import css from './Image.module.scss';

export default function Image() {
	return (
		<div className={css.Image}>
			<img src="./hero_image.png" alt="An image of myself" />
		</div>
	);
}
