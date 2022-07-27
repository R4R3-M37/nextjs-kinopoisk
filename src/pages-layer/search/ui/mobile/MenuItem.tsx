import React from 'react'

import { IMenuItemProps } from '@/shared/types/global'
import styles from '@/pages-layer/search/styles/mobile/MenuItem.module.scss'

const MenuItem: React.FC<IMenuItemProps> = ({ title }) => {
	return (
		<h3 className={styles.h3_root}>
			<button
				type='button'
				className={`${styles.button_root} dark:bg-gray-700`}
				aria-controls='filter-section-mobile-1'
				aria-expanded='false'
			>
				<span className={`${styles.button_title} dark:text-white`}>{title}</span>
			</button>
		</h3>
	)
}

export default MenuItem
