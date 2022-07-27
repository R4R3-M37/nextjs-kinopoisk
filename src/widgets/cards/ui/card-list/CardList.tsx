import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

import CardItem from '@/entities/card/CardItem'
import { IFilmData } from '@/shared/api/types/IFilmRoot'
import { ICardListProps } from '@/shared/types/global'
import { LoadingButtonCardList } from '@/widgets/cards/ui/next-page-button'
import { HeaderCardList } from '@/widgets/cards/ui/header-card-list/HeaderCardList'
import styles from '@/widgets/cards/styles/CardList.module.scss'

const CardList: React.FC<ICardListProps> = ({ title, activePage, setActivePage, data, isLoading }) => {
	const [response, setResponse] = useState<IFilmData[] | []>([])

	const handleNextPage = () => {
		setActivePage(data.pages > activePage ? activePage + 1 : activePage)
	}

	useEffect(() => {
		setResponse([...response, ...data.docs])
	}, [data])

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<div className={styles.div_card_list_root}>
			<HeaderCardList title={title} />
			<Grid container spacing={{ xs: 2, sm: 2, md: 4 }} columns={{ xs: 4, sm: 12, md: 12, lg: 20 }}>
				{response &&
					response.map((film: IFilmData) => (
						<Grid item xs={2} sm={4} md={4} key={film.id}>
							<CardItem data={film} />
						</Grid>
					))}
			</Grid>
			{data.pages > activePage && <LoadingButtonCardList handleNextPage={handleNextPage} />}
		</div>
	)
}

export default React.memo(CardList)
