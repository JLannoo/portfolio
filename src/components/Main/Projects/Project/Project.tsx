import React from 'react';
import css from './Project.module.scss';

import { Project as ProjectType } from '../../../../types';

export default function Project({ project }: { project: ProjectType }) {
	const [coords, setCoords] = React.useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setCoords({
			x: e.clientX - Math.floor(e.currentTarget.getBoundingClientRect().left),
			y: e.clientY - Math.floor(e.currentTarget.getBoundingClientRect().top),
		});
	};

	return (
		<div className={css.Project}
			onMouseMove={handleMouseMove}
			data-x={coords.x.toString()}
			data-y={coords.y.toString()}
		>
			<div className={css.Project__image}>
				<img src={project.image} alt={project.title} />
			</div>
			<div className={css.Project__title}>
				<h3>{project.title}</h3>
			</div>
			<div className={css.Project__description}>
				<p>{project.description}</p>
			</div>
		</div>
	);
}
