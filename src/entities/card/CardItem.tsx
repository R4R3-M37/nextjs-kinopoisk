import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import useCopyToClipboard from '@/shared/hooks/useCopyToClipboard'
import Link from 'next/link'
import { IFilmData } from '@/shared/api/types/IFilmRoot'
import PosterPreview from '@/shared/ui/PosterPreview'
import { ShareIcon } from '@/shared/icons/mui'
import styles from '@/entities/card/styles/CardItem.module.scss'

interface IProps {
	data: IFilmData
}

export const ROUTE_TYPE: any = {
	movie: 'films/',
	'tv-series': 'series/',
	cartoon: 'cartoons/',
	anime: 'anime/'
}

const DESCRIPTION_TYPE: any = {
	movie: 'Фильм',
	'tv-series': 'Сериал',
	cartoon: 'Мультфильм',
	anime: 'Аниме'
}

const CardItem: React.FC<IProps> = ({ data }) => {
	const [, copy] = useCopyToClipboard()
	const rating = data.rating.imdb !== 0 ? data.rating.imdb : data.rating.kp

	const handleCopy = (e: any) => {
		e.preventDefault()
		copy(window.location + ROUTE_TYPE[data.type] || `films/${data.id}`)
	}

	return (
		<Link href={`/${ROUTE_TYPE[data.type] || 'films/'}${data.id}`}>
			<a>
				<Card
					sx={{
						maxWidth: 345,
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						position: 'relative'
					}}
					className={`${styles.card_root} dark:bg-gray-800`}
				>
					<CardMedia>
						<PosterPreview src={data.poster.url} />
					</CardMedia>
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color='text.secondary'
							gutterBottom
							className='dark:text-zinc-400'
						>
							{DESCRIPTION_TYPE[data.type]}, {data.year}
						</Typography>
						<Typography variant='body2' color='text.primary' className='dark:text-zinc-300'>
							{data.name || data.enName || data.alternativeName}
						</Typography>
					</CardContent>
					<CardActions style={{ justifyContent: 'space-between' }}>
						<IconButton aria-label='share' onClick={handleCopy} className='dark:text-zinc-300'>
							<ShareIcon />
						</IconButton>
					</CardActions>
					<div className={`${styles.card_rating} dark:text-zinc-300`}>{rating}</div>
				</Card>
			</a>
		</Link>
	)
}

export default CardItem
