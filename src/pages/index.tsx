import React, { useState } from 'react'

import { useGetNewFilmsQuery, useGetNewSerialsQuery } from '@/shared/api'
import CardList from '@/widgets/cards/ui/card-list/CardList'

const HomePage: React.FC = () => {
	const [activePageFilms, setActivePageFilms] = useState<number>(1)
	const [activePageSerials, setActivePageSerials] = useState<number>(1)

	const { data: dataFilms, isLoading: isLoadingFilms } = useGetNewFilmsQuery(activePageFilms)
	const { data: dataSerials, isLoading: isLoadingSerials } = useGetNewSerialsQuery(activePageSerials)

	if (!dataFilms || !dataSerials) {
		return null
	}

	return (
		<section className='bg-white py-8 dark:bg-gray-700'>
			<CardList
				data={dataFilms}
				isLoading={isLoadingFilms}
				title={'Новые фильмы'}
				activePage={activePageFilms}
				setActivePage={setActivePageFilms}
			/>
			<CardList
				data={dataSerials}
				isLoading={isLoadingSerials}
				title={'Новые сериалы'}
				activePage={activePageSerials}
				setActivePage={setActivePageSerials}
			/>
		</section>
	)
}

export default HomePage
