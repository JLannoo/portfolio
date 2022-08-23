import React from 'react';
import css from './Main.module.scss';

import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default function Main() {
	return <main className={css.Main} id="home">
		<Hero />
		<AboutMe />
		<Skills />
		<Projects />
		<Contact />
	</main>;
}
