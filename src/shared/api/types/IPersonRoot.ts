export interface IPersonRoot {
	spouses: any[]
	id: number
	__v: number
	age: number
	birthPlace: any[]
	birthday: string
	countAwards: number
	createdAt: string
	death?: any
	deathPlace: any[]
	enName: string
	facts: IPersonFacts[]
	growth: number
	movies: IPersonMovies[]
	name: string
	photo: string
	profession: IPersonProfession[]
	sex: string
	updatedAt: string
}
export interface IPersonFacts {
	value: string
}
export interface IPersonMovies {
	id: number
	name: string
	rating: number
	general: boolean
	description: string
}
export interface IPersonProfession {
	value: string
}
export interface IPersonPlace {
	value: string
}
