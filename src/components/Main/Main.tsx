import React from 'react';
import css from './Main.module.scss';

import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';

export default function Main() {
	return <main className={css.Main} id="home">
		<Hero />
		<AboutMe />
		<Skills />
	</main>;
}
