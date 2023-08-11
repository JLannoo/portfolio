import React from 'react';
import { Skill as SkillType } from '../../../types';
import css from './Skills.module.scss';

import Skill from './Skill/Skill';
import Decorations from './Decorations/Decorations';

import { useTranslation } from 'react-i18next';
import useMediaQuery from '../../../hooks/useMediaQuery';

export default function Skills() {
	const { t } = useTranslation('main');
	const isMobile = useMediaQuery('(max-width: 580px)');

	const [showLimit, setShowLimit] = React.useState(isMobile ? 8 : null);

	React.useEffect(() => {
		setShowLimit(isMobile ? 8 : null);
	}, [isMobile]);

	const skillList:SkillType[] = [
		{
			name: 'TypeScript',
			image: './skills/typescript.png',
			url: 'https://www.typescriptlang.org/',
		},
		{
			name: 'Next.js',
			image: './skills/next.png',
			url: 'https://nextjs.org/',
		},
		{
			name: 'React',
			image: './skills/react.png',
			url: 'https://reactjs.org/',
		},
		{
			name: 'Angular',
			image: './skills/angular.png',
			url: 'https://angular.io/',
		},
		{
			name: 'Svelte',
			image: './skills/svelte.png',
			url: 'https://svelte.dev/',
		},
		{
			name: 'MySQL',
			image: './skills/mysql.png',
			url: 'https://www.mysql.com/',
		},
		{
			name: 'Prisma',
			image: './skills/prisma.png',
			url: 'https://www.prisma.io/',
		},
		{
			name: 'Drizzle',
			image: './skills/drizzle.png',
			url: 'https://orm.drizzle.team/',
		},
		{
			name: 'PHP',
			image: './skills/php.png',
			url: 'https://www.php.net/',
		},
		{
			name: 'Laravel',
			image: './skills/laravel.png',
			url: 'https://laravel.com/',
		},
		{
			name: 'Python',
			image: './skills/python.png',
			url: 'https://www.python.org/',
		},
		{
			name: 'Linux',
			image: './skills/linux.png',
			url: 'https://www.linux.org/',
		},
		{
			name: 'Docker',
			image: './skills/docker.png',
			url: 'https://www.docker.com/',
		},
		{
			name: 'Nginx',
			image: './skills/nginx.png',
			url: 'https://www.nginx.com/',
		},
		{
			name: 'Apache',
			image: './skills/apache.png',
			url: 'https://httpd.apache.org/',
		},
		{
			name: 'Git',
			image: './skills/git.png',
			url: 'https://git-scm.com/',
		},
		{
			name: 'Github Actions',
			image: './skills/github-actions.png',
			url: 'https://github.com/features/actions',
		},
	];

	return (
		<section className={css.Skills} id="skills">
			<Decorations />
			<h2 className={css.Title}>
				{t('skills_title')}
			</h2>
			<div className={css.Skills__container}>
				{skillList.map((skill, i) => (
					isMobile && showLimit && i >= showLimit ? null : <Skill key={skill.name} skill={skill} />
				))}
			</div>
			<div className={css.Skills__showMore}>
				{isMobile && showLimit && (
					<button onClick={() => setShowLimit(null)}>
						{t('skills_show_more')}
					</button>
				)}
			</div>
			<p className={css.Skills__comment}>
				{t('skills_comment')}
			</p>
		</section>
	);
}
