import React from 'react';
import css from './Skill.module.scss';

import type { Skill as SkillType } from '../../../../types';

import { BrokenImage } from '@mui/icons-material';

export default function Skill({ skill }: { skill: SkillType }) {
	const [errored, setErrored] = React.useState(false);

	return (
		<div className={css.Skill}>
			<>
				<div className={css.Skill__image}>
					{errored ? (
						<BrokenImage />
					) : <img src={skill.image}
						alt={skill.name}
						onError={(e) => {
							setErrored(true);
						}}/>}
				</div>
				<div className={css.Skill__name}>{skill.name}</div>
			</>
		</div>
	);
}
