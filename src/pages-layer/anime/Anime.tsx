import React, { useState } from 'react'

import { useGetNewAnimeQuery } from '@/shared/api'
import CardsSection from '@/widgets/cards/CardsSection'

const Anime: React.FC = () => {
	const [activePageAnime, setActivePageAnime] = useState<number>(1)
	const { data, isLoading } = useGetNewAnimeQuery(activePageAnime)

	if (!data) {
		return null
	}

	return (
		<CardsSection
			title={'Новые аниме'}
			data={data}
			isLoading={isLoading}
			activePage={activePageAnime}
			setActivePage={setActivePageAnime}
		/>
	)
}

export default Anime
