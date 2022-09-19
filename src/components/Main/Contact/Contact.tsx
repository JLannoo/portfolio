import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './Contact.module.scss';

import Socials from '../../Navbar/Socials/Socials';
import Form from './Form/Form';
import Input from './Input/Input';
import TextArea from './Input/TextArea';

export default function Contact() {
	const { t } = useTranslation('main');

	return (
		<section className={css.Contact} id="contact">
			<div className={css.Contact__Title}>
				<h2>{t('contact_title')}</h2>
			</div>
			<div className={css.Contact__Socials}>
				<p>{t('contact_socials_title')}</p>
				<Socials color="white"/>
				<p>{t('contact_socials_or')}</p>
			</div>
			<div className={css.Contact__Form}>
				<Form disabled>
					<Input label={t('contact_form_name')} props={{
						name: 'Nombre',
						type: 'text',
					}} />
					<Input label={t('contact_form_email')} props={{
						name: 'Email',
						type: 'email',
					}} />
					<TextArea label={t('contact_form_message')} props={{
						name: 'Mensaje',
						rows: 5,
					}} />
				</Form>
			</div>
		</section>
	);
}
