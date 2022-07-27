import { createSlice } from '@reduxjs/toolkit'

import { UiStateRootSearchMenu } from '@/features/types'

const initialState: UiStateRootSearchMenu = {
	searchMenuActive: false,
	searchModalMenuActive: false
}

export const searchMenuSlice = createSlice({
	name: 'searchMenu',
	initialState,
	reducers: {
		setSearchMenuActive: (state) => {
			state.searchMenuActive = true
		},
		setSearchMenuClose: (state) => {
			state.searchMenuActive = false
		}
	}
})

export const { setSearchMenuActive, setSearchMenuClose } = searchMenuSlice.actions

export default searchMenuSlice.reducer
