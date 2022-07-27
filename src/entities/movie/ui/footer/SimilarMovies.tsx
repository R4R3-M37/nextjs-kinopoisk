import React from 'react'

import Carousel from '@/shared/ui/carousel/Carousel'

interface ISimilarMoviesProps {
	data: any
}

const SimilarMovies: React.FC<ISimilarMoviesProps> = ({ data }) => {
	return (
		<>
			<div className='flex items-center py-6 text-3xl font-bold dark:text-zinc-300'>
				{data.similarMovies.length > 0 ? 'Похожее кино' : 'Нет похожих фильмов'}
			</div>
			<Carousel data={data.similarMovies} />
		</>
	)
}

export default React.memo(SimilarMovies)
