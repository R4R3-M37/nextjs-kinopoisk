import { createSlice } from '@reduxjs/toolkit'

import { UiStateRootSidebar } from '@/features/types'

const initialState: UiStateRootSidebar = {
	sidebarActive: false
}

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		setSidebarActive: (state) => {
			state.sidebarActive = true
		},
		setSidebarClose: (state) => {
			state.sidebarActive = false
		}
	}
})

export const { setSidebarActive, setSidebarClose } = sidebarSlice.actions

export default sidebarSlice.reducer
