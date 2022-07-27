import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import MovieButtons from '@/features/add-to-favorite/AddToFavoriteButtons'

interface ITitleInfoProps {
	isPersonPage?: boolean
	title: string
	altTitle: string
	id: number
	year?: number
	rating?: number
}

const MovieHeader: React.FC<ITitleInfoProps> = ({ isPersonPage, title, altTitle, id, year, rating }) => {
	return (
		<>
			<div className='font-bold text-gray-800 dark:text-zinc-300 text-4xl mb-5 text-center md:text-start'>
				{title} {year && <span>({year})</span>}
				{rating && (
					<div className='inline border border-green-600 bg-green-600 mt-4 ml-4 rounded text-white dark:text-zinc-300'>
						{rating}
					</div>
				)}
			</div>
			<div className='font-extralight text-gray-800 text-2xl text-center md:text-start mb-4 dark:text-zinc-200'>
				{altTitle}
			</div>
			{!isPersonPage && (
				<div className='flex items-center mb-10 flex-col sm:flex-row items-center justify-center lg:justify-start'>
					<Link href={`/playlist/${id}`}>
						<a>
							<Button variant='outlined' size='large' className='dark:bg-zinc-300 dark:text-zinc-800'>
								<PlayArrow />
								Смотреть
							</Button>
						</a>
					</Link>
					<MovieButtons id={id.toString()} />
				</div>
			)}
		</>
	)
}

export default React.memo(MovieHeader)
