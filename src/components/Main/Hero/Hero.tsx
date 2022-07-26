import React from 'react';
import css from './Hero.module.scss';

// import Background from './Background/Background';
import Name from './Name/Name';
import Subtitle from './Subtitle/Subtitle';

export default function Hero() {
	return (
		<section className={css.Hero}>
			{/* <Background /> */}
			<Name />
			<Subtitle />
		</section>
	);
}
