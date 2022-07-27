import React, { useMemo } from 'react'
import { format } from 'date-fns'
import ruLocale from 'date-fns/locale/ru'

import { IDescriptionItem, IPersonDescriptionProps } from '@/shared/types/global'
import { IPersonPlace, IPersonProfession } from '@/shared/api/types/IPersonRoot'

const PersonDescription: React.FC<IPersonDescriptionProps> = ({ data }) => {
	const {
		death = '--',
		growth,
		age = '--',
		countAwards,
		sex = '--',
		birthday = '--',
		birthPlace,
		deathPlace,
		profession
	} = data

	const professionValue = profession && profession.map(({ value }: IPersonProfession) => value).join(', ')
	const birthdayValue = format(new Date(birthday), 'do MMMM yyyy', { locale: ruLocale })
	const birthPlaceValue = birthPlace && birthPlace.map((place: IPersonPlace) => place.value).join(', ')
	const deathPlaceValue = deathPlace && deathPlace.map((place: IPersonPlace) => place.value).join(', ')

	const descriptionItems: IDescriptionItem[] = useMemo(
		() => [
			{ field: 'Возраст', value: age },
			{ field: 'Пол', value: sex },
			{ field: 'Рост', value: growth || '--' },
			{ field: 'Получено наград', value: countAwards || '--' },
			{ field: 'Деятельность', value: professionValue },
			{ field: 'День рождения', value: birthdayValue },
			{ field: 'Место рождения', value: birthPlaceValue || '--' },
			{ field: 'Дата смерти', value: death || '--' },
			{ field: 'Место смерти', value: deathPlaceValue || '--' }
		],
		[age, birthPlaceValue, birthdayValue, countAwards, death, deathPlaceValue, growth, professionValue, sex]
	)

	return (
		<>
			<h2 className='font-bold text-3xl mb-5 dark:text-zinc-300'>О актёре</h2>
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

export default React.memo(PersonDescription)
