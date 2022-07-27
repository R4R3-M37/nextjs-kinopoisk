import React, { useState } from 'react'

import { AppDispatch } from '@/app/redux/store'
import { useDispatch } from 'react-redux'
import { setCategory } from '@/pages-layer/search/model/searchSlice'
import styles from '@/pages-layer/search/styles/SearchCategory.module.scss'

const CATEGORIES_LIST: string[] = ['Фильмы', 'Сериалы', 'Мультфильмы', 'Аниме']

const SearchCategory: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const [activeCategory, setActiveCategory] = useState<null | number>(null)

	const handleSetCategory = (index: number) => {
		setActiveCategory(activeCategory === index ? null : index)
		dispatch(setCategory(activeCategory === index ? null : index))
	}

	return (
		<>
			{CATEGORIES_LIST.map((category, index) => (
				<div className={styles.div_root} key={category}>
					<input
						name='category[]'
						value='new-arrivals'
						type='checkbox'
						checked={activeCategory === index + 1}
						className={`${styles.input_root} dark:text-zinc-300`}
						onChange={() => handleSetCategory(index + 1)}
					/>
					<label
						htmlFor='filter-mobile-category-0'
						className={`${styles.label_root} dark:text-zinc-300`}
						onClick={() => handleSetCategory(index + 1)}
					>
						{category}
					</label>
				</div>
			))}
		</>
	)
}

export default SearchCategory
