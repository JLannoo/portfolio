import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './Name.module.scss';

export default function Name() {
	const { t } = useTranslation('main');

	return (
		<h1 className={css.Name}>
			{t('hero_name_hi')}
			<br></br>
			{t('hero_name_im')} Julián Lannóo
		</h1>
	);
}
