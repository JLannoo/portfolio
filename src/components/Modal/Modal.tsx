import React from 'react';
import css from './Modal.module.scss';
import { createPortal } from 'react-dom';

interface ModalProps {
	children: React.ReactNode,
	isOpen: boolean,
	close: () => void,
}

export default function Modal({ children, isOpen, close }: ModalProps) {
	return (
		isOpen ? createPortal(
			<>
				<div className={css.Modal}>
					<div className={css.Modal__overlay} onClick={close} />
					<div className={css.Modal__content}>
						<div className={css.Modal__content__topbar}>
							<div className={css.Modal__content__topbar__close} onClick={close}>
								<span>&times;</span>
							</div>
						</div>
						<div className={css.Modal__content_body}>
							{children}
						</div>
					</div>
				</div>
			</>, document.body,
		) : null
	);
}
