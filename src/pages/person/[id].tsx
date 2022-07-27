import React from 'react'
import { useRouter } from 'next/router'

import PersonByID from '@/pages-layer/person/PersonByID'
import { useGetPersonByIdQuery } from '@/shared/api'

const PersonPage: React.FC = () => {
	const { id } = useRouter().query
	const { data } = useGetPersonByIdQuery(id, { skip: id === undefined })

	if (!data) {
		return null
	}

	return <PersonByID data={data} />
}

export default PersonPage
