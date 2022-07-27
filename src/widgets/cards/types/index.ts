import { Dispatch } from 'react'

export interface ICardsSectionProps {
	title?: string
	data: any
	isLoading: boolean
	activePage: number
	setActivePage: Dispatch<number>
}
