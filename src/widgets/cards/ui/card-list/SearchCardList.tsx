import React from 'react'
import { Grid } from '@mui/material'

import { IFilmData } from '@/shared/api/types/IFilmRoot'
import CardItem from '@/entities/card/CardItem'
import { ISearchCardListProps } from '@/shared/types/global'
import { HeaderCardList } from '@/widgets/cards/ui/header-card-list/HeaderCardList'
import { PaginationCardList } from '@/widgets/cards/ui/next-page-button'
import styles from '@/widgets/cards/styles/CardList.module.scss'

const SearchCardList: React.FC<ISearchCardListProps> = ({ title = '', activePage, setActivePage, data, isLoading }) => {
	const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
		setActivePage(value)
	}

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<div className={styles.div_card_list_root}>
			<HeaderCardList title={title} />
			<Grid container spacing={{ xs: 2, sm: 2, md: 4 }} columns={{ xs: 4, sm: 12, md: 12, lg: 16 }}>
				{data.docs &&
					data.docs.map((film: IFilmData) => (
						<Grid item xs={2} sm={4} md={4} key={film.id}>
							<CardItem data={film} />
						</Grid>
					))}
			</Grid>
			{data.pages > 1 && (
				<PaginationCardList count={data.pages} activePage={activePage} handleChangePage={handleChangePage} />
			)}
		</div>
	)
}

export default SearchCardList
