import React from 'react';
import { Skill as SkillType } from '../../../types';
import css from './Skills.module.scss';

import Skill from './Skill/Skill';
import Decorations from './Decorations/Decorations';
import { useTranslation } from 'react-i18next';

export default function Skills() {
	const { t } = useTranslation('main');

	const skillList:SkillType[] = [
		{
			name: 'TypeScript',
			image: '/skills/typescript.png',
		},
		{
			name: 'Next.js',
			image: '/skills/next.png',
		},
		{
			name: 'Node.js',
			image: '/skills/node.png',
		},
		{
			name: 'React',
			image: '/skills/react.png',
		},
		{
			name: 'MySQL',
			image: '/skills/mysql.png',
		},
		{
			name: 'PHP',
			image: '/skills/php.png',
		},
		{
			name: 'Laravel',
			image: '/skills/laravel.png',
		},
		{
			name: 'Python',
			image: '/skills/python.png',
		},
		{
			name: 'Websockets',
			image: '/skills/websockets.png',
		},
		{
			name: 'Linux',
			image: '/skills/linux.png',
		},
		{
			name: 'Nginx',
			image: '/skills/nginx.png',
		},
		{
			name: 'Apache',
			image: '/skills/apache.png',
		},
		{
			name: 'Docker',
			image: '/skills/docker.png',
		},
		{
			name: 'Git',
			image: '/skills/git.png',
		},
		{
			name: 'Github Actions',
			image: '/skills/github-actions.png',
		},
	];

	return (
		<section className={css.Skills}>
			<Decorations />
			<h2 className={css.Title}>
				{t('skills_title')}
			</h2>
			<div className={css.Skills__container}>
				{skillList.map((skill) => (
					<Skill key={skill.name} skill={skill} />
				))}
			</div>
			<p className={css.Skills__comment}>
				{t('skills_comment')}
			</p>
		</section>
	);
}
