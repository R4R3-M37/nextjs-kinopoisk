import React from 'react'
import { IFilmData, IFilmFetchFacts } from '@/shared/api/types/IFilmRoot'
import { IPersonFacts, IPersonRoot } from '@/shared/api/types/IPersonRoot'

interface IDoYouKnowProps {
	data: IFilmData | IPersonRoot
}

const FactsAboutMovie: React.FC<IDoYouKnowProps> = ({ data }) => {
	return (
		<>
			<h2 className='text-3xl font-bold mb-12 dark:text-zinc-300'>Знаете ли вы что...</h2>
			<ul className='flex flex-col'>
				{data.facts.map((fact: IFilmFetchFacts | IPersonFacts, index: number) => (
					<li
						className='items dark:text-zinc-300'
						dangerouslySetInnerHTML={{ __html: fact.value }}
						key={index}
					/>
				))}
			</ul>
		</>
	)
}

export default React.memo(FactsAboutMovie)
