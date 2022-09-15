import React from 'react';
import css from './Navbar.module.scss';

import Logo from './Logo/Logo';
import MenuItem from './MenuItem/MenuItem';
import Socials from './Socials/Socials';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
	const { t } = useTranslation('main');

	const [selected, setSelected] = React.useState('#home');

	const MenuItems = [
		{
			name: t('navbar_item_home'),
			link: '#home',
		},
		{
			name: t('navbar_item_about'),
			link: '#about',
		},
		{
			name: t('navbar_item_projects'),
			link: '#projects',
		},
		{
			name: t('navbar_item_contact'),
			link: '#contact',
		},
	];

	return (
		<nav className={css.Navbar}>
			<Logo />
			<ul className={css.Navbar__list}>
				{MenuItems.map((item) => (
					<MenuItem
						key={item.name}
						name={item.name}
						link={item.link}
						onClick={() => setSelected(item.link)}
						className={selected === item.link ? 'selected' : ''}
					/>
				))}
			</ul>
			<Socials />
		</nav>
	);
}
