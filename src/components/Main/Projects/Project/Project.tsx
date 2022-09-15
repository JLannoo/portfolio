import React from 'react';
import css from './Project.module.scss';

import { Project as ProjectType } from '../../../../types';
import LinkButton from './LinkButton/LinkButton';
import ProjectModal from './ProjectModal/ProjectModal';

import useModal from '../../../../hooks/useModal';
import { useTranslation } from 'react-i18next';

export default function Project({ project }: { project: ProjectType }) {
	const { Modal, isOpen, open, close } = useModal();
	const { t } = useTranslation('main');

	return (
		<>
			<div className={css.Project}>
				<div className={css.Project__image} onClick={open}>
					<img src={project.image} alt={project.title} />
				</div>
				<div className={css.Project__info}>
					<div className={css.Project__info__title}>
						<h3>{project.title}</h3>
					</div>
					<div className={css.Project__info__description}>
						<p>{project.summary}</p>
					</div>
				</div>
				<div className={css.Project__links}>
					{project.WIP ?
						<p>{t('projects_wip')}</p> :
						project.links.map((link, index) => (
							<LinkButton key={index} link={link} />
						))
					}
				</div>
			</div>

			{/* Modal for showing project details */}
			<Modal isOpen={isOpen} close={close}>
				<ProjectModal project={project}/>
			</Modal>
		</>
	);
}
