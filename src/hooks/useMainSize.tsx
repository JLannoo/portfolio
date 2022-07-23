import React from 'react';

export function useMainSize() {
	const isClient = typeof window === 'object';
	const content = React.useRef(document.querySelector('.main-content__body') || document.body);

	function getSize() {
		return {
			width: isClient ? content.current.clientWidth : undefined,
			height: isClient ? content.current.clientHeight : undefined,
		};
	}

	const [windowSize, setWindowSize] = React.useState(getSize);

	React.useEffect(() => {
		if (!isClient) {
			return;
		}

		function handleResize() {
			if (content.current !== document.querySelector('#Main')) {
				const main = document.querySelector('#Main');
				content.current = main as HTMLElement;
			}
			setWindowSize(getSize());
		}

		//resize observer for content
		const resizeObserver = new ResizeObserver(handleResize);
		resizeObserver.observe(content.current);

		return () => {
			resizeObserver.disconnect();
		};
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return windowSize;
}
