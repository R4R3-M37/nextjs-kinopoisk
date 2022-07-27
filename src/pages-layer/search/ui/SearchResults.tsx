import React, { useState } from 'react'

import { useTypedSelector } from '@/shared/hooks/useTypedSelector'
import { useGetMovieBySearchQuery } from '@/shared/api'
import SearchCardList from '@/widgets/cards/ui/card-list/SearchCardList'
import { searchState } from '@/pages-layer/search/types'
import styles from '@/pages-layer/search/styles/SearchResults.module.scss'

const SearchResults: React.FC = () => {
	const { rating, year, sortType, sortBy, category } = useTypedSelector(searchState)
	const [activePage, setActivePage] = useState<number>(1)

	const { data, isLoading } = useGetMovieBySearchQuery({ rating, year, sortType, sortBy, category, page: activePage })

	if (!data) {
		return null
	}

	return (
		<div className={styles.div_root}>
			<div className={styles.div_block}>
				<section className={`${styles.section_root} dark:bg-gray-700`}>
					<SearchCardList
						data={data}
						isLoading={isLoading}
						activePage={activePage}
						setActivePage={setActivePage}
					/>
				</section>
			</div>
		</div>
	)
}

export default SearchResults
