import React from 'react';
import css from './Clients.module.scss';

import ClientCard from './ClientCard/ClientCard';
import { Client } from '../../../../types';

export default function Clients() {
	const clients: Client[] = [
		{
			name: 'WD40',
			image: '/clients/wd40.png',
			link: 'https://www.wd40.com/',
		},
		{
			name: 'John Deere',
			image: '/clients/jd.png',
			link: 'https://www.deere.com/',
		},
		{
			name: 'Corteva',
			image: '/clients/corteva.png',
			link: 'https://www.corteva.com/',
		},
	];

	return (
		<div className={css.Clients}>
			<h2 className={css.Title}>Some clients I have worked for</h2>
			<div className={css.Cards__container}>
				{clients.map((client: Client) => (
					<ClientCard key={client.name} client={client} />
				))}
			</div>
		</div>
	);
}
