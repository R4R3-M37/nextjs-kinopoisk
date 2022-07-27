import React from 'react'
import Person from '@/entities/movie/person/Person'
import { IPersonRoot } from '@/shared/api/types/IPersonRoot'

interface IPersonByIDProps {
	data: IPersonRoot
}

const PersonByID: React.FC<IPersonByIDProps> = ({ data }) => {
	return <Person data={data} />
}

export default PersonByID
