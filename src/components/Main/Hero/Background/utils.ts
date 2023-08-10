export const PARTICLES = {
	QUANTITY: 50,
	SIZE: 6,
	GAP: window.innerWidth / 50,
	HEIGHT: 100,
	// Tail length set in SCSS file
};

export const ANIMATION = {
	MIN_DURATION: 10,
	MAX_DURATION: 30,
	MAX_DELAY: 20,
};

export function getXDisplacement(index: number) {
	const { SIZE, GAP } = PARTICLES;
	const x = (SIZE + GAP) * index;
	return x;
}

export function getAnimationOptions() {
	const duration = Math.random() * (ANIMATION.MAX_DURATION - ANIMATION.MIN_DURATION) + ANIMATION.MIN_DURATION;
	const delay = Math.random() * ANIMATION.MAX_DELAY;
	return { duration, delay };
}
