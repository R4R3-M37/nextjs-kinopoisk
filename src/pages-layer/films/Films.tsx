import React, { useState } from 'react'

import { useGetNewFilmsQuery } from '@/shared/api'
import CardsSection from '@/widgets/cards/CardsSection'

const Films: React.FC = () => {
	const [activePageFilms, setActivePageFilms] = useState<number>(1)
	const { data, isLoading } = useGetNewFilmsQuery(activePageFilms)

	if (!data) {
		return null
	}

	return (
		<CardsSection
			title={'Новые фильмы'}
			data={data}
			isLoading={isLoading}
			activePage={activePageFilms}
			setActivePage={setActivePageFilms}
		/>
	)
}

export default Films
