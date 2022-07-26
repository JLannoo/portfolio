import React from 'react';
import { Skill as SkillType } from '../../../types';
import css from './Skills.module.scss';

import Skill from './Skill/Skill';
import Decorations from './Decorations/Decorations';

export default function Skills() {
	const skillList:SkillType[] = [
		{
			name: 'JavaScript',
			image: './skills/javascript.png',
		},
		{
			name: 'TypeScript',
			image: './skills/typescript.png',
		},
		{
			name: 'React',
			image: './skills/react.png',
		},
		{
			name: 'Next.js',
			image: './skills/next.png',
		},
		{
			name: 'PHP',
			image: './skills/php.png',
		},
		{
			name: 'Laravel',
			image: './skills/laravel.png',
		},
		{
			name: 'MySQL',
			image: './skills/mysql.png',
		},
		{
			name: 'Node.js',
			image: './skills/node.png',
		},
		{
			name: 'Websockets',
			image: './skills/websockets.png',
		},
		{
			name: 'Linux',
			image: './skills/linux.png',
		},
		{
			name: 'Nginx',
			image: './skills/nginx.png',
		},
		{
			name: 'Apache',
			image: './skills/apache.png',
		},
		{
			name: 'Docker',
			image: './skills/docker.png',
		},
		{
			name: 'Git',
			image: './skills/git.png',
		},
		{
			name: 'Github Actions',
			image: './skills/github-actions.png',
		},
	];

	return (
		<div className={css.Skills}>
			<Decorations />
			<h1 className={css.Title}>
                Skills
			</h1>
			<div className={css.Skills__container}>
				{skillList.map((skill) => (
					<Skill key={skill.name} skill={skill} />
				))}
			</div>
		</div>
	);
}
