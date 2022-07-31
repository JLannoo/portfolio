import React from 'react';
import css from './Projects.module.scss';

import Project from './Project/Project';
import { Project as ProjectType } from '../../../types';

export default function Projects() {
	const projects: ProjectType[] = [
		{
			title: 'Project 1',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro ad, et saepe atque blanditiis.',
			github_link: '',
			website_link: '',
			image: '',
			skills: [],
		},
		{
			title: 'Project 2',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro ad, et saepe atque blanditiis.',
			github_link: '',
			website_link: '',
			image: '',
			skills: [],
		},
		{
			title: 'Project 3',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro ad, et saepe atque blanditiis.',
			github_link: '',
			website_link: '',
			image: '',
			skills: [],
		},
		{
			title: 'Project 4',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro ad, et saepe atque blanditiis.',
			github_link: '',
			website_link: '',
			image: '',
			skills: [],
		},
	];

	return (
		<section className={css.Projects}>
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
