import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { kinopoiskApi } from '@/shared/api'
import sidebarReducer from '@/widgets/navbar/model/sidebarSlice'
import searchMenuReducer from '@/pages-layer/search/model/searchMenuSlice'
import searchReducer from '@/pages-layer/search/model/searchSlice'
import addToFavoriteReducer from '@/features/add-to-favorite/model/favoriteFilmsSlice'
import themeSwitcherReducer from '@/features/dark-mode/model/themeSwitcherSlice'

const uiState = combineReducers({ sidebar: sidebarReducer, searchMenu: searchMenuReducer, theme: themeSwitcherReducer })

export const store = configureStore({
	reducer: {
		[kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
		search: searchReducer,
		uiState,
		favoriteFilms: addToFavoriteReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
