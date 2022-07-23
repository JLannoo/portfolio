import React from 'react';
import css from './Background.module.scss';

import Sketch from 'react-p5';
import p5Types from 'p5';

import { useMainSize } from '../../../../hooks/useMainSize';

export default function Background() {
	const { width } = useMainSize();
	const height = document.body.clientHeight;

	const [canvas, setCanvas] = React.useState<p5Types>();

	function windowResized(p5: p5Types) {
		p5.resizeCanvas(width ?? 0, height);
	}

	function setup(p5: p5Types, canvasParentRef: Element) {
		p5.createCanvas(width ?? 0, height / 2 ?? 0).parent(canvasParentRef);
		setCanvas(p5);
	}

	function draw(p5: p5Types) {
		p5.background('#FFF');
		p5.fill('#000');
		p5.ellipse(p5.mouseX, p5.mouseY, 10, 10);
	}

	React.useEffect(() => {
		return () => {
			canvas?.remove();
		};
	});

	return (
		<Sketch setup={setup} draw={draw} className={css.Background} windowResized={windowResized}/>
	);
}
