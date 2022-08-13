import { useState } from 'react';
import Modal from '../components/Modal/Modal';

export default function useModal(initialState: boolean = false) {
	const [isOpen, setIsOpen] = useState(initialState);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return { Modal, isOpen, open, close };
}
