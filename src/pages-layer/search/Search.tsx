import React from 'react'
import { useDispatch } from 'react-redux'

import SearchMobileMenu from '@/pages-layer/search/ui/mobile/SearchMobileMenu'
import { AppDispatch } from '@/app/redux/store'
import { setSearchMenuActive } from '@/pages-layer/search/model/searchMenuSlice'
import { MenuIcon } from '@/shared/icons/mui'
import {
	SearchCategory,
	SearchDatePickYear,
	SearchRating,
	SearchResults,
	SearchSortList
} from '@/pages-layer/search/ui'
import styles from '@/pages-layer/search/styles/Search.module.scss'

const Search: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()

	const handleMenuToggle = () => {
		dispatch(setSearchMenuActive())
	}

	return (
		<div className={styles.div_search_root}>
			<div className={`${styles.div_search_block} dark:bg-gray-700`}>
				<SearchMobileMenu />
				<main>
					<div className={styles.div_search_extended}>
						<h1 className={`${styles.h1_search_title} dark:text-zinc-300`}>Расширенный поиск</h1>
						<div className={styles.div_flex}>
							<SearchSortList />
							<button
								type='button'
								className={`${styles.button_filter} dark:text-zinc-300`}
								onClick={handleMenuToggle}
							>
								<span className={`${styles.span_filter_title} dark:text-zinc-300`}>Фильтр</span>
								<MenuIcon />
							</button>
						</div>
					</div>
					<section className={styles.section_root}>
						<div className={styles.div_modify_block}>
							<form className={styles.hidden_lg_only}>
								<div className={styles.div_rating_block}>
									<h3 className={styles.rating_title}>
										<button
											type='button'
											className={`${styles.title_button} dark:bg-gray-700`}
											aria-controls='filter-section-0'
											aria-expanded='false'
										>
											<h2 className={`${styles.title_name} dark:text-zinc-200`}>Рейтинг</h2>
										</button>
									</h3>
									<div className='pt-6' id='filter-section-0'>
										<div className='space-y-4'>
											<SearchRating />
										</div>
									</div>
								</div>
								<div className={styles.div_rating_block}>
									<h3 className={styles.rating_title}>
										<button
											type='button'
											className={`${styles.title_button} dark:bg-gray-700`}
											aria-controls='filter-section-1'
											aria-expanded='false'
										>
											<h2 className={`${styles.title_name} dark:text-zinc-200`}>Категории</h2>
										</button>
									</h3>
									<div className='pt-6' id='filter-section-1'>
										<SearchCategory />
									</div>
								</div>
								<div className={styles.div_rating_block}>
									<h3 className={styles.rating_title}>
										<button
											type='button'
											className={`${styles.title_button} dark:bg-gray-700`}
											aria-controls='filter-section-2'
											aria-expanded='false'
										>
											<h2 className={`${styles.title_name} dark:text-zinc-200`}>Год выхода</h2>
										</button>
									</h3>
									<div className='pt-6' id='filter-section-2'>
										<div className='space-y-6'>
											<SearchDatePickYear />
										</div>
									</div>
								</div>
							</form>
							<SearchResults />
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}

export default Search
