import React from 'react';
import css from './Contact.module.scss';

import Form from './Form/Form';
import Input from './Input/Input';
import TextArea from './Input/TextArea';

export default function Contact() {
	return (
		<section className={css.Contact} id="contact">
			<div className={css.Contact__Title}>
				<h2>Contact me!</h2>
			</div>
			<div className={css.Contact__Form}>
				<Form disabled>
					<Input label="Name" props={{
						name: 'Nombre',
						type: 'text',
					}} />
					<Input label="Email" props={{
						name: 'Email',
						type: 'email',
					}} />
					<TextArea label="Message" props={{
						name: 'Mensaje',
						rows: 5,
					}} />
				</Form>
			</div>
			<div className={css.Contact__socials}>
			</div>
		</section>
	);
}
