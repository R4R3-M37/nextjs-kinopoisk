import React from 'react'

import { IFilmRoot } from '@/shared/api/types/IFilmRoot'

export interface IHeaderCardListProps {
	title: string
}

export interface IPersonDescriptionProps {
	data: any
}

export interface ILoadingButtonCardListProps {
	handleNextPage: any
}

export interface IPlaylistByIDProps {
	id: string | string[] | undefined
}

export interface IMenuItemProps {
	title: string
}

export interface IPaginationCardListProps {
	activePage: number
	handleChangePage: (event: any, page: number) => void
	count: number
}

export interface IDescriptionItem {
	field: string
	value: string | number | React.ReactElement | React.ReactElement[]
}

export interface ICardListProps {
	title: string
	activePage: number
	setActivePage: React.Dispatch<number>
	data: IFilmRoot
	isLoading: boolean
}

export interface ISearchCardListProps {
	title?: string
	activePage: number
	setActivePage: React.Dispatch<number>
	data: IFilmRoot
	isLoading: boolean
}
