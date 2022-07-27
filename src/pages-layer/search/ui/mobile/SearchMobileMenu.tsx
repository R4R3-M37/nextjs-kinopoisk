import React from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/redux/store'
import { useTypedSelector } from '@/shared/hooks/useTypedSelector'
import { setSearchMenuClose } from '@/pages-layer/search/model/searchMenuSlice'
import { SearchCategory, SearchDatePickYear, SearchRating } from '@/pages-layer/search/ui'
import { CloseIcon } from '@/shared/icons/mui'
import MenuItem from '@/pages-layer/search/ui/mobile/MenuItem'
import { searchMenuState } from '@/features/scroll-disabler/types'
import styles from '@/pages-layer/search/styles/mobile/SearchMobileMenu.module.scss'

const SearchMobileMenu: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const { searchMenuActive } = useTypedSelector(searchMenuState)

	const handleMenuClose = () => {
		dispatch(setSearchMenuClose())
	}

	return (
		<>
			{searchMenuActive && (
				<div className={styles.div_root} role='dialog' aria-modal='true'>
					<div className={styles.hidden_block} />
					<div className={styles.menu_root} onClick={handleMenuClose}>
						<div className={`${styles.div_block} dark:bg-gray-700`} onClick={(e) => e.stopPropagation()}>
							<div className={styles.extended_search_root}>
								<h2 className={`${styles.extended_search_title} dark:text-white`}>Расширенный поиск</h2>
								<button
									type='button'
									className={styles.extended_search_close_button}
									onClick={handleMenuClose}
								>
									<span className='sr-only'>Close menu</span>
									<CloseIcon />
								</button>
							</div>
							<form className={`${styles.menu_item_header} mt-4`}>
								<div className='border-t border-gray-200 px-4 py-6'>
									<MenuItem title={'Рейтинг'} />
									<div className='pt-6' id='filter-section-mobile-0'>
										<div className='space-y-6'>
											<SearchRating />
										</div>
									</div>
								</div>
								<div className={styles.menu_item_header}>
									<MenuItem title={'Категории'} />
									<div id='filter-section-mobile-1'>
										<div className='pt-6'>
											<SearchCategory />
										</div>
									</div>
								</div>
								<div className={styles.menu_item_header}>
									<MenuItem title={'Год выхода'} />
									<div className='pt-6' id='filter-section-mobile'>
										<div className='space-y-6'>
											<SearchDatePickYear />
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default SearchMobileMenu
