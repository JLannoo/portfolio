import React from 'react';
import css from './LanguageSelector.module.scss';
import i18next from 'i18next';

import { ReactComponent as English } from '../../../assets/flags/us.svg';
import { ReactComponent as Spanish } from '../../../assets/flags/es.svg';

import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
	const [selected, setSelected] = React.useState(i18next.language);
	useTranslation();

	React.useEffect(() => {
		setSelected(i18next.language);
	}, [i18next.language]);

	return (
		<div className={css.LanguageSelector}>
			<English className={selected.includes('en') ? '' : css.disabled} onClick={() => changeLanguage('en')} />
			<Spanish className={selected.includes('es') ? '' : css.disabled} onClick={() => changeLanguage('es')} />
		</div>
	);
}
