import React, { useState } from 'react'

import { useGetNewSerialsQuery } from '@/shared/api'
import CardsSection from '@/widgets/cards/CardsSection'

const Series: React.FC = () => {
	const [activePageSerials, setActivePageSerials] = useState<number>(1)
	const { data, isLoading } = useGetNewSerialsQuery(activePageSerials)

	if (!data) {
		return null
	}

	return (
		<CardsSection
			title={'Новые сериалы'}
			data={data}
			isLoading={isLoading}
			activePage={activePageSerials}
			setActivePage={setActivePageSerials}
		/>
	)
}

export default Series
