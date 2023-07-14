import React from 'react';
import css from './Projects.module.scss';

import Project from './Project/Project';
import { Project as ProjectType } from '../../../types';
import { useTranslation } from 'react-i18next';

export default function Projects() {
	const { t: tMain } = useTranslation('main');
	const { t: tProjects } = useTranslation('projects');

	const projects: ProjectType[] = [
		tProjects('Solucionadores', { returnObjects: true }),
		tProjects('SistemaAenima', { returnObjects: true }),
		tProjects('PixelChat', { returnObjects: true }),
		tProjects('EzReachFlexitapa', { returnObjects: true }),
		tProjects('SvelteQ&A', { returnObjects: true }),
		tProjects('Formlic', { returnObjects: true }),
		tProjects('IntegralsCheatsheet', { returnObjects: true }),
	];

	return (
		<section className={css.Projects} id="projects">
			<div className={css.ShadowParent}>
				<h2 className={css.Title}>
					{tMain('projects_title')}
				</h2>
			</div>
			<div className={css.CheckMyRepos}>
				<span>
					{tMain('projects_repos')}
				</span>
				<a href="https://github.com/jlannoo?tab=repositories" target="_blank" rel="noopener noreferrer">
						Github
				</a>
			</div>
			<div className={css.Projects__container}>
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</div>
		</section>
	);
}
