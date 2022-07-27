import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IFilmData, IFilmRoot, IGetFavoriteFilmsQueryArgs } from '@/shared/api/types/IFilmRoot'
import { IPersonRoot } from '@/shared/api/types/IPersonRoot'
import { baseUrl, currentYear, TOKEN } from '@/shared/config'

export const kinopoiskApi = createApi({
	reducerPath: 'kinopoiskAPI',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getFilmById: build.query<IFilmData, string | string[] | undefined>({
			query: (id) => `/movie?search=${id}&field=id&token=97CT04G-7VT48YR-G0FYQ1R-BF92T79`
		}),
		getFavoriteFilms: build.query<IFilmRoot, IGetFavoriteFilmsQueryArgs>({
			query: ({ page, favorites }) =>
				`/movie?search[]=1-10&field=rating.kp&${favorites}&sortField=year&sortType=-1&limit=12&page=${page}&token=${TOKEN}`
		}),
		getNewFilms: build.query<IFilmRoot, number>({
			query: (page) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${currentYear}&field=typeNumber&search=1&limit=12&page=${page}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${TOKEN}`
		}),
		getNewSerials: build.query<IFilmRoot, number>({
			query: (page) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${currentYear}&field=typeNumber&search=2&limit=12&page=${page}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${TOKEN}`
		}),
		getNewAnime: build.query<IFilmRoot, number>({
			query: (page) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${currentYear}&field=typeNumber&search=4&limit=12&page=${page}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${TOKEN}`
		}),
		getFilmByName: build.query<IFilmRoot, string>({
			query: (input) =>
				`/movie?search=${input}&field=name&limit=5&sortField=year&sortType=-1&field=typeNumber&search=1&isStrict=false&token=${TOKEN}`
		}),
		getCartoons: build.query<IFilmRoot, number>({
			query: (page) =>
				`/movie?field=rating.kp&search=1-10&field=year&search=${currentYear}&field=typeNumber&search=3&limit=12&page=${page}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${TOKEN}`
		}),
		getMovieBySearch: build.query<IFilmRoot, any>({
			query: ({ rating, year, sortType, sortBy, category, page }: any) =>
				`/movie?field=rating.kp&search=${rating}&field=year&search=${year}&field=typeNumber&search=${category}&limit=12&page=${page}&sortField=year&sortType=1&sortField=${sortBy}&sortType=${sortType}&token=${TOKEN}`
		}),
		getPersonById: build.query<IPersonRoot, string | string[] | undefined>({
			query: (id) => `/person?field=id&search=${id}&token=97CT04G-7VT48YR-G0FYQ1R-BF92T79`
		})
	})
})

export const {
	useGetNewFilmsQuery,
	useGetFavoriteFilmsQuery,
	useGetFilmByIdQuery,
	useGetNewSerialsQuery,
	useGetFilmByNameQuery,
	useGetNewAnimeQuery,
	useGetCartoonsQuery,
	useGetMovieBySearchQuery,
	useGetPersonByIdQuery
} = kinopoiskApi
