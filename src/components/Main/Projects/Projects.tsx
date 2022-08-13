import React from 'react';
import css from './Projects.module.scss';

import Project from './Project/Project';
import { Project as ProjectType } from '../../../types';

export default function Projects() {
	const projects: ProjectType[] = [
		{
			title: 'Project 1',
			summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro ad, et saepe atque blanditiis.',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse numquam accusantium architecto, 
			ad repellat modi vero maxime vel dignissimos mollitia tenetur iure dolor labore molestiae libero? Praesentium voluptatem 
			sed ad autem harum, quisquam molestias illum, id beatae maxime molestiae?`,
			image: '/src/assets/projects/portfolio.png',
			links: [
				{ name: 'Github', link: 'https://github.com' },
				{ name: 'Website', link: 'https://locahost:3000' },
			],
		},
		{
			title: 'Project 2',
			summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro ad, et saepe atque blanditiis.',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse numquam accusantium architecto, 
			ad repellat modi vero maxime vel dignissimos mollitia tenetur iure dolor labore molestiae libero? Praesentium voluptatem 
			sed ad autem harum, quisquam molestias illum, id beatae maxime molestiae?`,
			image: '/src/assets/projects/portfolio.png',
			links: [
				{ name: 'Website', link: 'https://locahost:3000' },
			],
		},
		{
			title: 'Project 3',
			summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro ad, et saepe atque blanditiis.',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse numquam accusantium architecto, 
			ad repellat modi vero maxime vel dignissimos mollitia tenetur iure dolor labore molestiae libero? Praesentium voluptatem 
			sed ad autem harum, quisquam molestias illum, id beatae maxime molestiae?`,
			image: '/src/assets/projects/portfolio.png',
			links: [
			],
		},
		{
			title: 'Project 4',
			summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro ad, et saepe atque blanditiis.',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse numquam accusantium architecto, 
			ad repellat modi vero maxime vel dignissimos mollitia tenetur iure dolor labore molestiae libero? Praesentium voluptatem 
			sed ad autem harum, quisquam molestias illum, id beatae maxime molestiae?`,
			image: '/src/assets/projects/portfolio.png',
			links: [
				{ name: 'Github', link: 'https://github.com' },
				{ name: 'Website', link: 'https://locahost:3000' },
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
