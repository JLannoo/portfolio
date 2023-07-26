import React from 'react';
import css from './Socials.module.scss';

import { ReactComponent as Github } from '../../../assets/github.svg';
import { ReactComponent as Linkedin } from '../../../assets/linkedin.svg';

interface SocialsProps {
	color?: string;
	show?: 'github' | 'linkedin' | 'both';
}

export default function Socials({ color = 'white', show = 'both' }: SocialsProps) {
	return (
		<div className={css.Socials}>
			{
				(show === 'both' || show === 'linkedin') &&
				<a href="https://www.linkedin.com/in/juli%C3%A1n-lann%C3%B3o/" target="_blank" rel="noopener noreferrer" style={{ color }}>
					<Linkedin/>
				</a>
			}
			{
				(show === 'both' || show === 'github') &&
				<a href="https://github.com/JLannoo/" target="_blank" rel="noopener noreferrer" style={{ color }}>
					<Github/>
				</a>
			}
		</div>
	);
}
