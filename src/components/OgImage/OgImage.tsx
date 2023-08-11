import React from 'react';
import css from './OgImage.module.scss';

import Hero from '../Main/Hero/Hero';
import { changeLanguage } from 'i18next';

/**
 * User in dev mode for generating the og image for the site
 * @return {JSX.Element}
 */
export default function OgImage() {
	changeLanguage('en');

	return (
		<>
			<div className={css.OgImageContainer}>
				<Hero />
			</div>
		</>
	);
}
