import { createSlice } from '@reduxjs/toolkit'

import { ISearchRoot } from '@/pages-layer/search/types'

const initialState: ISearchRoot = {
	rating: '1-10',
	year: 2022,
	category: 1,
	sortBy: 'rating.kp',
	sortType: -1
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setYear: (state, { payload }) => {
			state.year = payload
		},
		setCategory: (state, { payload }) => {
			state.category = payload
		},
		setRating: (state, { payload }) => {
			state.rating = payload
		},
		setSortBy: (state, { payload }) => {
			switch (payload) {
				case 'Рейтингу':
					state.sortBy = 'votes.kp'
					break
				case 'Дате выхода':
					state.sortBy = 'year'
					break
			}
		},
		setSortType: (state, { payload }) => {
			switch (payload) {
				case 'По убыванию':
					state.sortType = -1
					break
				case 'По возрастанию':
					state.sortType = 1
					break
			}
		}
	}
})

export const { setYear, setCategory, setRating, setSortBy, setSortType } = searchSlice.actions

export default searchSlice.reducer
