import React from 'react'

import { IFilmData } from '@/shared/api/types/IFilmRoot'

interface IDescriptionItems {
	field: string
	value: string | number | React.ReactElement | React.ReactElement[]
}

interface IDescriptionProps {
	data: IFilmData
}

const Description: React.FC<IDescriptionProps> = ({ data }) => {
	const { countries, genres, slogan, ageRating, budget, movieLength, fees } = data

	const countries_ = countries.map(({ name }) => name).join(', ')
	const genres_ = genres.map(({ name }) => name).join(', ')

	const slogan_ = slogan ? slogan : '--'
	const ageRating_: React.ReactElement = (
		<span className='border-2 dark:border-zinc-400'>{ageRating ? `${ageRating}+` : '--'}</span>
	)

	const budgetCurrency_ = budget?.currency ? budget.currency : ''
	const budgetValue_ = budget?.value ? budget.value : '--'

	const movieLength_ = movieLength ? `${movieLength} мин` : '--'

	const feesUsaCurrency_ = fees?.usa?.currency ? fees.usa.currency : ''
	const feesUsaValue_ = fees?.usa?.value ? fees.usa.value : '--'

	const feesWorldCurrency_ = fees?.world?.currency ? fees.world.currency : ''
	const feesWorldValue_ = fees?.world?.value ? fees.world.value : '--'

	const descriptionItems: IDescriptionItems[] = [
		{ field: 'Страны', value: countries_ || '--' },
		{ field: 'Жанр', value: genres_ || '--' },
		{ field: 'Слоган', value: slogan_ },
		{ field: 'Возраст', value: ageRating_ },
		{ field: 'Бюджет', value: `${budgetCurrency_}${budgetValue_}` },
		{ field: 'Время', value: movieLength_ },
		{ field: 'Сборы в США', value: `${feesUsaCurrency_}${feesUsaValue_}` },
		{ field: 'Сборы в мире', value: `${feesWorldCurrency_}${feesWorldValue_}` }
	]

	return (
		<>
			<h2 className='font-bold text-3xl mb-5 dark:text-zinc-300'>О фильме</h2>
			<ul className='container'>
				{descriptionItems.map((item) => (
					<div className='p-2' key={item.field}>
						<li className='flex items-center'>
							<span
								className='block md:text-2xl text-gray-500 dark:text-zinc-300'
								style={{ flex: '0 0 200px' }}
							>
								{item.field}
							</span>
							<span className='relative text-gray-800 md:text-2xl dark:text-zinc-400'>{item.value}</span>
						</li>
					</div>
				))}
			</ul>
		</>
	)
}

export default React.memo(Description)
