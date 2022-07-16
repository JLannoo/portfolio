import React from 'react';
import css from './Navbar.module.scss';

import Logo from './Logo/Logo';
import MenuItem from './MenuItem/MenuItem';
import Socials from './Socials/Socials';

export default function Navbar() {
	const [selected, setSelected] = React.useState('Home');

	const MenuItems = [
		{
			name: 'Home',
			link: '#home',
		},
		{
			name: 'About Me',
			link: '#about',
		},
		{
			name: 'Projects',
			link: '#projects',
		},
		{
			name: 'Contact',
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
						onClick={() => setSelected(item.name)}
						className={selected === item.name ? 'selected' : ''}
					/>
				))}
			</ul>
			<Socials />
		</nav>
	);
}
