import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './AboutMe.module.scss';
import Clients from './Clients/Clients';

export default function AboutMe() {
	const { t } = useTranslation('main');

	return (
		<section className={css.AboutMe} id="about">
			<h2 className={css.Title}>{t('about_me_title')}</h2>
			<div className={css.Text}>
				<p style={{ whiteSpace: 'pre-wrap' }}>{t('about_me_body')}</p>
			</div>
			<Clients />
		</section>
	);
}
