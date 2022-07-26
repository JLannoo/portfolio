import React from 'react';
import css from './Background.module.scss';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Background() {
	const particlesInit = async (main: any) => {
		await loadFull(main);
	};

	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	return (
		<div className={css.Background}>
			{reducedMotion ?
				null :
				<Particles
					id="tsparticles"
					init={particlesInit}
					width="100%"
					height="700px"
					options={{
						fullScreen: false,
						backgroundMode: true,
						background: {
							color: {
								value: '#fff',
							},
						},
						particles: {
							color: {
								value: '#ccc',
							},
							links: {
								color: '#ccc',
								distance: 150,
								enable: true,
							},
							number: {
								value: 75,
							},
							move: {
								direction: 'none',
								enable: true,
								speed: 0.5,
							},
							size: {
								value: 6,
								random: true,
							},
						},
					}}
				/>
			}
		</div>
	);
}
