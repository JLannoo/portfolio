import React from 'react';
import css from './Background.module.scss';
import { PARTICLES, getAnimationOptions, getXDisplacement } from './utils';

export default function Background() {
	return (
		<div className={css.Background}>
			<ul className={css.Particles}>
				{Array.from(Array(PARTICLES.QUANTITY)).map((_, i) => {
					const left = getXDisplacement(i);
					const { delay, duration } = getAnimationOptions();

					return <li
						key={i}
						className={css.Particle}
						style={{
							'width': PARTICLES.SIZE,
							'height': PARTICLES.SIZE,
							left,
							'animationDelay': `${delay}s`,
							'animationDuration': `${duration}s`,
						}}
					/>;
				})}
			</ul>
		</div>
	);
}
