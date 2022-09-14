import React from 'react';
import { Project } from '../../../../../types';
import css from './ProjectModal.module.scss';

interface ProjectModalProps {
    project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
	return (
		<>
			<div className={css.ProjectModal}>
				<div className={css.ProjectModal__image}>
					<img src={project.image} alt={project.title} />
				</div>
				<div className={css.ProjectModal__info}>
					<div className={css.ProjectModal__info__title}>
						<h3>{project.title}</h3>
					</div>
					<div className={css.ProjectModal__info__description}>
						<p>{project.description}</p>
					</div>
					<div className={css.ProjectModal__info__responsibilites}>
						<h3>
							In this project I was responsible for:
						</h3>
						<ul>
							{project.responsibilities.map((responsibility, index) => (
								<li key={index}>{responsibility}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
