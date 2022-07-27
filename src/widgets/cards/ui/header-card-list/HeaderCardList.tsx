import React from 'react'

import { IHeaderCardListProps } from '@/shared/types/global'
import styles from '@/widgets/cards/styles/HeaderCardList.module.scss'

export const HeaderCardList: React.FC<IHeaderCardListProps> = ({ title }) => {
	return (
		<nav className={styles.nav_root}>
			<div className={styles.div_title}>
				<div className={`${styles.title} dark:text-zinc-300`}>{title}</div>
			</div>
		</nav>
	)
}
