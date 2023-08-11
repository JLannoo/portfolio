import React from 'react';
import css from './Navbar.module.scss';

import Logo from './Logo/Logo';
import MenuItem from './MenuItem/MenuItem';
import Socials from './Socials/Socials';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
	const { t } = useTranslation('main');

	const [selected, setSelected] = React.useState('#about');

	const MenuItems = [
		{
			name: t('navbar_item_about'),
			link: '#about',
		},
		{
			name: t('navbar_item_projects'),
			link: '#projects',
		},
		{
			name: t('navbar_item_skills'),
			link: '#skills',
		},
		{
			name: t('navbar_item_contact'),
			link: '#contact',
		},
	];

	const scrollHandler = () => {
		const elements = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;
		elements.forEach((element) => {
			const isScrolledToTop = window.scrollY === 0;
			const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

			if (isScrolledToTop) setSelected(`#${elements[0].id}`);
			if (isScrolledToBottom) setSelected(`#${elements[elements.length - 1].id}`);

			const screenMiddle = window.innerHeight / 2 + window.scrollY;
			if (element.offsetTop <= screenMiddle && element.offsetTop + element.offsetHeight >= screenMiddle) {
				setSelected(`#${element.id}`);
			}
		});
	};

	React.useEffect(() => {
		window.addEventListener('scroll', scrollHandler);

		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<nav className={css.Navbar}>
			<Logo />
			<ul className={css.Navbar__list}>
				{MenuItems.map((item) => (
					<MenuItem
						key={item.name}
						name={item.name}
						link={item.link}
						className={selected === item.link ? 'selected' : ''}
					/>
				))}
			</ul>
			<Socials />
		</nav>
	);
}
