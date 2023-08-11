import React from 'react';
import css from './Socials.module.scss';

import { ReactComponent as Github } from '../../../assets/github.svg';
import { ReactComponent as Linkedin } from '../../../assets/linkedin.svg';
import { ReactComponent as Medium } from '../../../assets/medium.svg';

interface SocialsProps {
	color?: string;
	show?: 'github' | 'linkedin' | 'medium' | 'all';
}

export default function Socials({ color = 'white', show = 'all' }: SocialsProps) {
	return (
		<div className={css.Socials}>
			{
				(show === 'all' || show === 'linkedin') &&
				<a title="LinkedIn" href="https://www.linkedin.com/in/juli%C3%A1n-lann%C3%B3o/" target="_blank" rel="noopener noreferrer" style={{ color }}>
					<Linkedin/>
				</a>
			}
			{
				(show === 'all' || show === 'github') &&
				<a title="Github" href="https://github.com/JLannoo/" target="_blank" rel="noopener noreferrer" style={{ color }}>
					<Github/>
				</a>
			}
			{
				(show === 'all' || show === 'medium') &&
				<a title="Medium" href="https://medium.com/@julianlannoo" target="_blank" rel="noopener noreferrer" style={{ color }}>
					<Medium/>
				</a>
			}
		</div>
	);
}
