import React from 'react';
import css from './Socials.module.scss';

import Linkedin from '@mui/icons-material/LinkedIn';
import Github from '@mui/icons-material/GitHub';

export default function Socials() {
	return (
		<div className={css.Socials}>
			<a href="https://www.linkedin.com/in/juli%C3%A1n-lann%C3%B3o/" target="_blank" rel="noopener noreferrer">
				<Linkedin />
			</a>
			<a href="https://github.com/JLannoo/" target="_blank" rel="noopener noreferrer">
				<Github />
			</a>
		</div>
	);
}
