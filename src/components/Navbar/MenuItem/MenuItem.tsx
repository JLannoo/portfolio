import React from 'react';
import css from './MenuItem.module.scss';

import type { MenuItemProps } from '../../../types';

const MenuItem: React.FC<MenuItemProps> = ({ name, link, onClick, className }) => {
	return (
		<li className={css.MenuItem + ' ' + css[className]}>
			<a href={link} onClick={onClick}>
				{name}
			</a>
		</li>
	);
};

export default MenuItem;
