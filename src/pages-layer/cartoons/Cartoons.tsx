import React, { useState } from 'react'

import { useGetCartoonsQuery } from '@/shared/api'
import CardsSection from '@/widgets/cards/CardsSection'

const Cartoons: React.FC = () => {
	const [activePageCartoons, setActivePageCartoons] = useState<number>(1)
	const { data, isLoading } = useGetCartoonsQuery(activePageCartoons)

	if (!data) {
		return null
	}

	return (
		<CardsSection
			title={'Новые мультфильмы'}
			data={data}
			isLoading={isLoading}
			activePage={activePageCartoons}
			setActivePage={setActivePageCartoons}
		/>
	)
}

export default Cartoons
