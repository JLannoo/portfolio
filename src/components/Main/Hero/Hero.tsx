import React from 'react';
import css from './Hero.module.scss';

import Background from './Background/Background';
import Name from './Name/Name';
import Subtitle from './Subtitle/Subtitle';
import Socials from '../../Navbar/Socials/Socials';
import Image from './Image/Image';

export default function Hero() {
	return (
		<section className={css.Hero}>
			<Background />
			<Name />
			<Subtitle />
			<div className={css.Hero__socials}>
				<Socials color="black"/>
			</div>
			<Image />
		</section>
	);
}
