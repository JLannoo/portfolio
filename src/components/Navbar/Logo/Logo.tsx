import React from 'react';
import css from './Logo.module.scss';

export default function Logo() {
	return (
		<div className={css.Logo}>
			<img src="/Logo White.png" alt="Logo" />
			<h1>Julian Lannoo</h1>
		</div>
	);
}
