import React from 'react';
import css from './Decorations.module.scss';

export default function Decorations() {
	return (
		<>
			<div className={css.Decoration} style={{
				top: '60px',
				left: '-100px',
			}}></div>
			<div className={css.Decoration} style={{
				top: '60px',
				left: '-40px',
			}}></div>
			<div className={css.Decoration} style={{
				bottom: '60px',
				right: '-100px',
			}}></div>
			<div className={css.Decoration} style={{
				bottom: '60px',
				right: '-40px',
			}}></div>
		</>
	);
}
