import React, { useState } from 'react'

import { useGetFavoriteFilmsQuery } from '@/shared/api'
import CardsSection from '@/widgets/cards/CardsSection'
import { favoriteFilmsState } from '@/features/add-to-favorite/types'
import { useTypedSelector } from '@/shared/hooks/useTypedSelector'

const Favorite: React.FC = () => {
	const { favoriteFilms } = useTypedSelector(favoriteFilmsState)
	const [activePageFavorite, setActivePageFavorite] = useState<number>(1)
	const requestFavoriteFilms = favoriteFilms.map((id: string) => `search=${id}&field=id`).join('&')

	const { data, isLoading } = useGetFavoriteFilmsQuery(
		{ page: activePageFavorite, favorites: requestFavoriteFilms },
		{ skip: favoriteFilms.length < 1 }
	)

	if (isLoading) {
		return null
	}

	return (
		<CardsSection
			title={'Избранное'}
			data={data}
			isLoading={isLoading}
			activePage={activePageFavorite}
			setActivePage={setActivePageFavorite}
		/>
	)
}

export default Favorite
