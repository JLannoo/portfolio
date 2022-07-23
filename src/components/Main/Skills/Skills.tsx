import React from 'react';
import { Skill as SkillType } from '../../../types';
import css from './Skills.module.scss';

import Skill from './Skill/Skill';
import Decorations from './Decorations/Decorations';

export default function Skills() {
	const skillList:SkillType[] = [
		{
			name: 'HTML',
			image: 'html.png',
		},
		{
			name: 'CSS',
			image: 'css.png',
		},
		{
			name: 'JavaScript',
			image: 'javascript.png',
		},
		{
			name: 'TypeScript',
			image: 'typescript.png',
		},
		{
			name: 'React',
			image: 'react.png',
		},
		{
			name: 'Next.js',
			image: 'next.png',
		},
		{
			name: 'PHP',
			image: 'php.png',
		},
		{
			name: 'Laravel',
			image: 'laravel.png',
		},
		{
			name: 'MySQL',
			image: 'mysql.png',
		},
		{
			name: 'Node.js',
			image: 'nodejs.png',
		},
		{
			name: 'Express',
			image: 'express.png',
		},
		{
			name: 'Websockets',
			image: 'websockets.png',
		},
		{
			name: 'Linux',
			image: 'linux.png',
		},
		{
			name: 'Git',
			image: 'git.png',
		},
		{
			name: 'Github Actions',
			image: 'github-actions.png',
		},
	];

	return (
		<div className={css.Skills}>
			<Decorations />
			<h1 className={css.Title}>
                Skills
			</h1>
			<div className={css.Skills__container}>
				{skillList.map((skill, index) => (
					<Skill key={index} skill={skill} />
				))}
			</div>
		</div>
	);
}
