import React from 'react';
import { Skill as SkillType } from '../../../types';
import css from './Skills.module.scss';

import Skill from './Skill/Skill';
import Decorations from './Decorations/Decorations';

export default function Skills() {
	const skillList:SkillType[] = [
		{
			name: 'TypeScript',
			image: '/src/assets/skills/typescript.png',
		},
		{
			name: 'Next.js',
			image: '/src/assets/skills/next.png',
		},
		{
			name: 'Node.js',
			image: '/src/assets/skills/node.png',
		},
		{
			name: 'React',
			image: '/src/assets/skills/react.png',
		},
		{
			name: 'MySQL',
			image: '/src/assets/skills/mysql.png',
		},
		{
			name: 'PHP',
			image: '/src/assets/skills/php.png',
		},
		{
			name: 'Laravel',
			image: '/src/assets/skills/laravel.png',
		},
		{
			name: 'Python',
			image: '/src/assets/skills/python.png',
		},
		{
			name: 'Websockets',
			image: '/src/assets/skills/websockets.png',
		},
		{
			name: 'Linux',
			image: '/src/assets/skills/linux.png',
		},
		{
			name: 'Nginx',
			image: '/src/assets/skills/nginx.png',
		},
		{
			name: 'Apache',
			image: '/src/assets/skills/apache.png',
		},
		{
			name: 'Docker',
			image: '/src/assets/skills/docker.png',
		},
		{
			name: 'Git',
			image: '/src/assets/skills/git.png',
		},
		{
			name: 'Github Actions',
			image: '/src/assets/skills/github-actions.png',
		},
	];

	return (
		<section className={css.Skills}>
			<Decorations />
			<h2 className={css.Title}>
                Skills
			</h2>
			<div className={css.Skills__container}>
				{skillList.map((skill) => (
					<Skill key={skill.name} skill={skill} />
				))}
			</div>
		</section>
	);
}
