import React from 'react';
import css from './AboutMe.module.scss';

export default function AboutMe() {
	return (
		<div className={css.AboutMe} id="about">
			<h1 className={css.Title}>About Me</h1>
			<div className={css.Text}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id, in quasi molestiae voluptas mollitia,
					sed illo iusto obcaecati nesciunt sequi architecto assumenda ad quae laboriosam? Inventore, vero cupiditate
					aut debitis eveniet est rem, eligendi, repudiandae ea corporis distinctio? Fuga illum et sunt? Alias, rem commodi?
					Omnis ullam officia adipisci.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus
					numquam voluptas cupiditate aliquam ad exercitationem, atque laboriosam nam magnam?
				</p>
			</div>
		</div>
	);
}
