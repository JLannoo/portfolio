import React, { DetailedHTMLProps } from 'react';
import css from './Input.module.scss';

interface TextAreaProps {
    label?: string;
    props: DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
}

export default function TextArea({ label, props }: TextAreaProps) {
	return (
		<div className={css.InputContainer}>
			<label className={css.Label}>{label}</label>
			<textarea {...props} className={`${css.Input} ${css.TextArea}`} />
		</div>
	);
}
