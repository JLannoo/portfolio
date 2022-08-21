import React from 'react';
import css from './ClientCard.module.scss';

import { Client } from '../../../../../types';

export default function ClientCard({ client }: {client: Client}) {
	return (
		<div className={css.ClientCard}>
			<a href={client.link} target="_blank" rel="noopener noreferrer">
				<div className={css.ClientCard__image}>
					<img src={client.image} alt=""/>
				</div>
			</a>
			<div className={css.ClientCard__name}>
				<p>{client.name}</p>
			</div>
		</div>
	);
}
