import React from 'react';
import css from './Clients.module.scss';

import ClientCard from './ClientCard/ClientCard';
import { Client } from '../../../../types';
import { useTranslation } from 'react-i18next';

export default function Clients() {
	const { t } = useTranslation('main');

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
			<h2 className={css.Title}>{t('about_me_clients_title')}</h2>
			<div className={css.Cards__container}>
				{clients.map((client: Client) => (
					<ClientCard key={client.name} client={client} />
				))}
			</div>
		</div>
	);
}
