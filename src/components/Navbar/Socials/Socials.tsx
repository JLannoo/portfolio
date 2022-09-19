import React from 'react';
import css from './Socials.module.scss';

import { ReactComponent as Github } from '../../../assets/github.svg';
import { ReactComponent as Linkedin } from '../../../assets/linkedin.svg';

interface SocialsProps {
	color?: string;
}

export default function Socials({ color = 'white' }: SocialsProps) {
	return (
		<div className={css.Socials}>
			<a href="https://www.linkedin.com/in/juli%C3%A1n-lann%C3%B3o/" target="_blank" rel="noopener noreferrer" style={{ color }}>
				<Linkedin/>
			</a>
			<a href="https://github.com/JLannoo/" target="_blank" rel="noopener noreferrer" style={{ color }}>
				<Github/>
			</a>
		</div>
	);
}
