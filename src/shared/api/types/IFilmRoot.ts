export interface IGetFavoriteFilmsQueryArgs {
	page: number
	favorites: string
}

export interface IMovieProps {
	data: IFilmData
}

export interface IFilmRoot {
	docs: IFilmData[]
	limit: number
	page: number
	pages: number
	total: number
}

export interface IFilmData {
	externalId: IFilmFetchExternalId
	logo: IFilmFetchLogo
	poster: IFilmFetchPoster
	backdrop: IFilmFetchBackdrop
	rating: IFilmFetchRating
	votes: IFilmFetchVotes
	videos: IFilmFetchVideos
	budget: IFilmFetchBudget
	fees: IFilmFetchFees
	distributors: IFilmFetchDistributors
	premiere: IFilmFetchPremiere
	images: IFilmFetchImages
	collections: any[]
	updateDates: any[]
	status: string
	movieLength: number
	productionCompanies: IFilmFetchProductionCompanies[]
	spokenLanguages: IFilmFetchSpokenLanguages[]
	id: number
	type: string
	name: string
	description: string
	slogan: string
	year: number
	facts: IFilmFetchFacts[]
	genres: IFilmFetchGenres[]
	countries: IFilmFetchCountries[]
	seasonsInfo: any[]
	persons: IFilmFetchPersons[]
	lists: any[]
	typeNumber: number
	alternativeName: string
	enName?: any
	names: IFilmFetchNames[]
	updatedAt: string
	ratingMpaa: string
	shortDescription?: any
	technology: IFilmFetchTechnology
	ticketsOnSale: boolean
	imagesInfo: IFilmFetchImagesInfo
	sequelsAndPrequels: IFilmFetchSequelsAndPrequels[]
	similarMovies: IFilmFetchSimilarMovies[]
	ageRating: number
	createDate: string
}
export interface IFilmFetchExternalId {
	_id: string
	imdb: string
}
export interface IFilmFetchLogo {
	_id: string
	url?: any
}
export interface IFilmFetchPoster {
	_id: string
	url: string
	previewUrl: string
}
export interface IFilmFetchBackdrop {
	_id: string
	url?: any
}
export interface IFilmFetchRating {
	_id: string
	kp: number
	imdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
}
export interface IFilmFetchVotes {
	_id: string
	kp: number
	imdb: number
	filmCritics: number
	russianFilmCritics: number
	await: number
}
export interface IFilmFetchVideosTrailers {
	_id: string
	url: string
	name: string
	site: string
}
export interface IFilmFetchVideos {
	_id: string
	trailers: IFilmFetchVideosTrailers[]
	teasers: any[]
}
export interface IFilmFetchBudget {
	_id: string
	value: number
	currency: string
}
export interface IFilmFetchFeesWorld {
	_id: string
	value: number
	currency: string
}
export interface IFilmFetchFeesUsa {
	_id: string
	value: number
	currency: string
}
export interface IFilmFetchFees {
	world: IFilmFetchFeesWorld
	usa: IFilmFetchFeesUsa
	_id: string
}
export interface IFilmFetchDistributors {
	distributor: string
	distributorRelease?: any
}
export interface IFilmFetchPremiere {
	_id: string
	country: string
	world: string
}
export interface IFilmFetchImages {
	postersCount: number
	backdropsCount: number
	framesCount: number
}
export interface IFilmFetchProductionCompanies {
	name: string
	url: string
	previewUrl: string
}
export interface IFilmFetchSpokenLanguages {
	name: string
	nameEn: string
}
export interface IFilmFetchFacts {
	value: string
	type: string
	spoiler: boolean
}
export interface IFilmFetchGenres {
	name: string
}
export interface IFilmFetchCountries {
	name: string
}
export interface IFilmFetchPersons {
	id: number
	name: string
	enName: string
	description?: any
	enProfession: string
	photo: string
}
export interface IFilmFetchNames {
	name: string
}
export interface IFilmFetchTechnology {
	_id: string
	hasImax: boolean
	has3D: boolean
}
export interface IFilmFetchImagesInfo {
	_id: string
	framesCount: number
}
export interface IFilmFetchSequelsAndPrequelsPoster {
	_id: string
	url: string
	previewUrl: string
}
export interface IFilmFetchSequelsAndPrequels {
	_id: string
	id: number
	name?: any
	enName: string
	alternativeName: string
	type: string
	poster: IFilmFetchSequelsAndPrequelsPoster
}
export interface IFilmFetchSimilarMoviesPoster {
	_id: string
	url: string
	previewUrl: string
}
export interface IFilmFetchSimilarMovies {
	_id: string
	id: number
	name: string
	enName: string
	alternativeName: string
	poster: IFilmFetchSimilarMoviesPoster
}
