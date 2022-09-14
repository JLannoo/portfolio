import React from 'react';
import css from './Projects.module.scss';

import Project from './Project/Project';
import { Project as ProjectType } from '../../../types';

export default function Projects() {
	const projects: ProjectType[] = [
		{
			title: 'WD-40 Club de Solucionadores',
			summary: `Social media platform / community blog, developed in Next.JS for WD-40 LATAM.`,
			description:
				`Social media platform / community blog where people can share their expiriences and tips using WD-40 products.\n\n` +
				`Building this was an interesting experience. The whole team jumped head first into a project with new technologies and tight deadlines.\n\n` +
				`It came out as a great project and learning experience.`,
			image: '/projects/solucionadores.png',
			links: [
				{ name: 'Website', link: 'https://solucionadores.wd40.lat' },
			],
			responsibilities: [
				'Functional analysis and design',
				'Database structure design and implementation (MySQL)',
				'Database migrations',
				'Backend development (Node.JS)',
				'Backend documentation (JSDoc + Swagger)',
				'Integration testing',
				'Application deployment (Apache + Nginx)',
			],
		},
		{
			title: 'SistemaAenima',
			summary: `Remaking of internal budget management system's front end.`,
			description:
				`This project was a remaking of an internal budget management system's front end.\n\n` +
				`The original system was made in AngularJS and was very slow and hard to maintain. On top of that, half of it was not even working properly.\n\n` +
				`The new one was made in React and was a great learning experience. It was also a great opportunity to improve it's functionality and user experience.\n\n` +
				`The backend and database also needed some reworking and added functionality.\n\n\n` +
				`Obviously, this being an internal system, I can only talk about my experience developing it and can't provide much information about it.`,
			image: '/projects/sistemaenima.png',
			links: [],
			responsibilities: [
				'UX design and implementation',
				'Front end development (React)',
				'Backend development (Node.JS)',
				'Database redesign and implementation',
				'Backend documentation',
			],
		},
		{
			title: 'PixelChat',
			summary: `Live public chat and drawing with pixels along with other people!.`,
			description:
				`A personal project that I developed with Vanilla JS and SockeIO for learning about websockets.\n\n` +
				`I started with a livechat because it's the classic example for a first project with websockets.\n` +
				`But I quickly found that making only a chat was kind of boring so I thought of making something more interesting.\n\n` +
				`I came up with the idea of drawing with other people.\n` +
				`I had previously made a Discord bot that allowed users to draw with pixels in a 25x25 canvas so I decided to add the same idea in here\n\n` +
				`I thing it came out as a great project and final product.`,
			image: '/projects/pixelchat.png',
			links: [
				{ name: 'Github', link: 'https://github.com/jlannoo/pixelchat' },
				{ name: 'Website', link: 'https://pixelchat.up.railway.app/' },
			],
			responsibilities: [
				'Backend development (Node JS & Socket.IO)',
				'Frontend development (Vanilla JS)',
				'Frontend design',
			],
		},
		{
			title: 'EZ-Reach + Flexitapa',
			summary: 'Minigames developed with P5.JS for sampling campaign with discounts as rewards for WD-40 products.',
			description:
				`This project was a ad campaign for WD-40 products where people can play a minigame and get a discount as reward.\n\n` +
				`The games were developed with P5.JS and the landing pages surrounding them were made with React by a team partner.\n` +
				`These games were finally used in a live expo in a WD-40 stand in the form of PWA. A contest was organized for even more prices for the attendees\n\n` +
				`This was a fun and different project. Not often do you get the chance to work on videogames in the web development industry.`,
			image: '/projects/ezreach+flexitapa.png',
			links: [
				{ name: 'Website', link: 'https://samplingflexitapa.wd40.lat/' },
				{ name: 'Website', link: 'https://ezreach.wd40.lat' },
			],
			responsibilities: [
				'Videogame design and development (P5.JS)',
				'Progressive Web App development',
			],
		},
		{
			title: 'Formlic',
			summary: 'An open-source "form as a service" platform for creating and managing forms endpoints for web applications.',
			description:
				`A project I started because I didn't like the way most form services work.\n` +
				`I wanted to create a service that was easy to use, had a good UI and was open-source.\n\n` +
				`You can create a form, get a link to it and send POST requests to it to save the data and email it to you.\n\n` +
				`I started this project with the idea of making it production ready, at least for my own use cases`,
			image: '/projects/formlic.png',
			links: [],
			WIP: true,
			responsibilities: [
				'Functional analysis and design',
				'Front end development (Next.JS)',
				'Backend development',
				'Database structure design and implementation (MongoDB)',
				'Database migrations',
				'Backend documentation (JSDoc + Swagger)',
				'Integration testing',
				'Application deployment (Railway)',
			],
		},
		{
			title: 'Integrals Cheatsheet',
			summary: 'A printable list of commonly used integrals with Wolfram Alpha integration. Made for learning Astro.',
			description:
				`This project was made mainly for learning Astro and how to use it for lightweight, fast and easy to make statically generated sites.\n\n` +
				`Made while I was studying for my Calculus III exam. It was a great way to learn Astro and it's features.`,
			image: '/projects/integrals.png',
			links: [
				{ name: 'Github', link: 'https://www.github.com/jlannoo/integrals-cheatsheet' },
				{ name: 'Website', link: 'https://jlannoo.github.io/integrals-cheatsheet' },
			],
			responsibilities: [
				'Learning Astro',
				'Research on integrals',
			],
		},
	];

	return (
		<section className={css.Projects} id="projects">
			<div className={css.ShadowParent}>
				<h2 className={css.Title}>
                    Projects
				</h2>
			</div>
			<div className={css.Projects__container}>
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</div>
		</section>
	);
}
