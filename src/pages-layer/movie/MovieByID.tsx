import React from 'react'
import { useRouter } from 'next/router'

import { useGetFilmByIdQuery } from '@/shared/api'
import Movie from '@/entities/movie/Movie'

const MovieByID: React.FC = () => {
	const { id } = useRouter().query
	const { data } = useGetFilmByIdQuery(id, { skip: id === undefined })

	if (!data) {
		return null
	}

	return <Movie data={data} />
}

export default MovieByID
