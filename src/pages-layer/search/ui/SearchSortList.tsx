import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/redux/store'
import { setSortBy, setSortType } from '@/pages-layer/search/model/searchSlice'
import { KeyboardArrowDownIcon } from '@/shared/icons/mui'
import styles from '@/pages-layer/search/styles/SearchSortList.module.scss'

const TYPE_LIST: string[] = ['Рейтингу', 'Дате выхода']
const SORT_LIST: string[] = ['По убыванию', 'По возрастанию']

const SearchSortList: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const modalRef = useRef<HTMLDivElement | null>(null)
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [activeSortList, setActiveSortList] = useState({ type: 'Рейтингу', sort: 'По убыванию' })

	const handleModalToggle = () => {
		setIsModalOpen(!isModalOpen)
	}

	const handleSetSortType = (sort: string) => {
		setActiveSortList((activeSortList) => ({ ...activeSortList, sort }))
		dispatch(setSortType(sort))
	}

	const handleSetSortBy = (type: string) => {
		setActiveSortList((activeSortList) => ({ ...activeSortList, type }))
		dispatch(setSortBy(type))
	}

	const handleClickOutside = (e: any) => {
		setIsModalOpen(e.path.includes(modalRef.current))
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			return document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<>
			<div className={styles.div_root}>
				<div ref={modalRef}>
					<button
						type='button'
						className={`${styles.button_sort_by} dark:text-zinc-300 dark:bg-gray-700`}
						id='menu-button'
						aria-expanded='false'
						aria-haspopup='true'
						onClick={handleModalToggle}
					>
						Сортировать по...
						<KeyboardArrowDownIcon />
					</button>
				</div>
				{isModalOpen && (
					<div
						className={`${styles.modal_root} dark:text-zinc-300 dark:bg-gray-700`}
						role='menu'
						aria-orientation='vertical'
						aria-labelledby='menu-button'
						tabIndex={-1}
					>
						<div className='py-1' role='none'>
							{TYPE_LIST.map((type) => (
								<button
									className={
										activeSortList.type === type
											? `${styles.modal_active} dark:text-white`
											: `${styles.modal_close} dark:text-zinc-400`
									}
									role='menuitem'
									tabIndex={-1}
									onClick={() => handleSetSortBy(type)}
									key={type}
								>
									{type}
								</button>
							))}
							{SORT_LIST.map((sort) => (
								<button
									className={
										activeSortList.sort === sort
											? `${styles.modal_active} dark:text-white`
											: `${styles.modal_close} dark:text-zinc-400`
									}
									role='menuitem'
									tabIndex={-1}
									onClick={() => handleSetSortType(sort)}
									key={sort}
								>
									{sort}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default SearchSortList
