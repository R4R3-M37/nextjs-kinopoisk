import React from 'react'

import CardList from '@/widgets/cards/ui/card-list/CardList'
import HeaderGoBack from '@/shared/ui/header-go-back/HeaderGoBack'
import { ICardsSectionProps } from '@/widgets/cards/types'
import styles from '@/widgets/cards/styles/CardsSection.module.scss'

const CardsSection: React.FC<ICardsSectionProps> = ({ title = '', data, isLoading, activePage, setActivePage }) => {
	return (
		<section className={`${styles.section_root} dark:bg-gray-700`}>
			{data ? (
				<CardList
					data={data}
					isLoading={isLoading}
					title={title}
					activePage={activePage}
					setActivePage={setActivePage}
				/>
			) : (
				<div className={styles.div_no_data_root}>
					<HeaderGoBack />
					<div className={`${styles.no_data_text} dark:text-zinc-300`}>Тут пусто</div>
				</div>
			)}
		</section>
	)
}

export default CardsSection
