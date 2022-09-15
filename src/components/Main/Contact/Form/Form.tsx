import React from 'react';
import { useTranslation } from 'react-i18next';
import css from './Form.module.scss';

interface FormProps {
	children: React.ReactNode;
	disabled?: boolean;
}

export default function Form({ children, disabled }: FormProps) {
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);

	const { t } = useTranslation('main');

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget as HTMLFormElement);

		if (formData.get('Nombre') && formData.get('Email') && formData.get('Mensaje')) {
			setLoading(true);
			fetch('https://formspree.io/f/mqkjaaed', { method: 'POST', body: formData, mode: 'no-cors' })
				.then(() => {
					setSuccess(true);
				})
				.catch(() => {
					alert('Error sending the message. Please try again.');
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			alert('Please fill out all the fields');
		}
	};

	return (
		<form className={css.Form} onSubmit={handleSubmit}>
			{children}
			<button disabled={success} type="submit" className={`${css.Button} ${success ? css.Success : ''}`}>
				{loading ?
					t('contact_form_button_sending') :
					(success ?
						'✔' : t('contact_form_button_default'))
				}
			</button>
		</form>
	);
}
