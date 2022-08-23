import React, { DetailedHTMLProps } from 'react';
import css from './Input.module.scss';

interface InputProps {
	label?: string;
	props: DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

export default function Input({ label, props }: InputProps) {
	return (
		<div className={css.InputContainer}>
			{label && <label className={css.Label}>{label}</label>}
			<input
				{...props}
				className={css.Input}
			/>
		</div>
	);
}
