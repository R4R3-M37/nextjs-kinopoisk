export interface Root {
	search: ISearchRoot
}

export interface ISearchRoot {
	rating: string
	year: string | number
	category: number
	sortBy: string
	sortType: number
}

export const searchState = (state: Root) => state.search
