import React from 'react'

import { IFilmData } from '@/shared/api/types/IFilmRoot'
import Carousel from '@/shared/ui/carousel/Carousel'

interface ISequelsAndPrequelsProps {
	data: IFilmData
}

const SequelsAndPrequels: React.FC<ISequelsAndPrequelsProps> = ({ data }) => {
	const filteredDataSeqAndPreq = data.sequelsAndPrequels.filter(
		(item) => item.name !== undefined || item.enName !== undefined || item.alternativeName !== undefined
	)
	return (
		<>
			<div className='flex items-center py-6 text-3xl font-bold dark:text-zinc-300'>
				{filteredDataSeqAndPreq.length > 0 ? 'Сиквелы и приквелы' : ''}
			</div>
			<Carousel data={filteredDataSeqAndPreq} />
		</>
	)
}

export default React.memo(SequelsAndPrequels)
