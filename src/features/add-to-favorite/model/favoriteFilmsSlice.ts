import { createSlice } from '@reduxjs/toolkit'

const LOCAL_STORAGE_KEY: string = 'favoriteFilms'

const getDataFromLocalStorage = (key: string) => {
	try {
		return typeof localStorage !== 'undefined' && JSON.parse(localStorage.getItem(key) || '')
	} catch (error) {
		return null
	}
}

const initialState: any = {
	favoriteFilms: getDataFromLocalStorage(LOCAL_STORAGE_KEY) || []
}

export const favoriteFilmsSlice = createSlice({
	name: 'favoriteFilms',
	initialState,
	reducers: {
		setFavoriteFilm: (state, { payload }) => {
			state.favoriteFilms.push(payload)
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.favoriteFilms))
		},
		removeFavoriteFilm: (state, { payload }) => {
			const filtered = state.favoriteFilms.filter((id: string) => id !== payload)
			state.favoriteFilms = filtered
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.favoriteFilms))
		}
	}
})

export const { setFavoriteFilm, removeFavoriteFilm } = favoriteFilmsSlice.actions

export default favoriteFilmsSlice.reducer
