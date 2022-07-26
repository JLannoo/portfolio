import React from 'react';
import css from './AboutMe.module.scss';

export default function AboutMe() {
	return (
		<section className={css.AboutMe} id="about">
			<h1 className={css.Title}>About Me</h1>
			<div className={css.Text}>
				<p>
					I am a developer from Argentina.
					Currently studying Information Systems Engineering at UTN FRRo.
				</p>
				<p>
					I work at a Digital Strategy company, building websites and web applications to improve brand image, sales and online presence.
				</p>
				<p>
					I am used to working in a well communicated team and jumping between multiple concurrent projects for different clients.
				</p>
			</div>
		</section>
	);
}
