import { createSlice } from '@reduxjs/toolkit'

const initialLocalStorage = typeof localStorage !== 'undefined' && localStorage.getItem('theme')

const initialState: any = {
	theme: initialLocalStorage
}

export const themeSwitcherSlice = createSlice({
	name: 'themeSwitcher',
	initialState,
	reducers: {
		setDarkTheme: (state) => {
			state.theme = 'dark'
			localStorage.setItem('theme', state.theme)
		},
		setLightTheme: (state) => {
			state.theme = 'light'
			localStorage.setItem('theme', state.theme)
		}
	}
})

export const { setDarkTheme, setLightTheme } = themeSwitcherSlice.actions

export default themeSwitcherSlice.reducer
