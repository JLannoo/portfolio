import React, { ReactNode } from 'react';
import css from './LinkButton.module.scss';

import { ReactComponent as Github } from '../../../../../assets/github.svg';
import { ReactComponent as Link } from '../../../../../assets/link.svg';

import { Link as LinkType } from '../../../../../types';

const LinkIcons:{[key:string]: ReactNode} = {
	Github: <Github/>,
	Website: <Link/>,
};

interface LinkProps {
    link: LinkType
}

export default function LinkButton({ link }: LinkProps) {
	return (
		<div className={css.LinkButton}>
			<a href={link.link} target="_blank" rel="noopener noreferrer">
				{LinkIcons[link.name]}
			</a>
		</div>
	);
}
