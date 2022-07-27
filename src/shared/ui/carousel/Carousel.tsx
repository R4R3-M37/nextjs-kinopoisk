import React, { useState } from 'react'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'

import useHorizontalScroll from '@/shared/hooks/useHorizontalScroll'
import PosterPreview from '@/shared/ui/PosterPreview'
import styles from '@/shared/ui/carousel/styles/Carousel.module.scss'
import { ButtonLeftArrow, ButtonRightArrow } from '@/shared/ui/carousel/ui/Button'

interface ICarouselProps {
	data: any[]
	isPersonPage?: boolean
	isFilmPage?: boolean
}

const Carousel: React.FC<ICarouselProps> = ({ data, isPersonPage, isFilmPage }) => {
	const [sliceArrayFirst, setSliceArrayFirst] = useState<number>(0)
	const [sliceArraySecond, setSliceArraySecond] = useState<number>(5)
	const scrollRef: any = useHorizontalScroll()

	const handlePrevSlice = () => {
		if (sliceArrayFirst > 0 && sliceArraySecond > 5) {
			setSliceArrayFirst(sliceArrayFirst - 5)
			setSliceArraySecond(sliceArraySecond - 5)
		}
	}

	const handleNextSlice = () => {
		if (sliceArrayFirst < data.length - 5 && sliceArraySecond < data.length) {
			setSliceArrayFirst(sliceArrayFirst + 5)
			setSliceArraySecond(sliceArraySecond + 5)
		}
	}

	return (
		<>
			<Stack direction='row' spacing={2} className={styles.button_root}>
				{sliceArrayFirst > 0 && <ButtonLeftArrow handlePrevSlice={handlePrevSlice} />}
				{sliceArraySecond < data.length && <ButtonRightArrow handleNextSlice={handleNextSlice} />}
			</Stack>
			<div className={styles.scrollable}>
				<div className={styles.scrollable} ref={scrollRef}>
					{data &&
						data.slice(sliceArrayFirst, sliceArraySecond).map((item: any, index: number) => (
							<div className={styles.card_root} key={index}>
								<Link
									href={
										isPersonPage
											? `/films/${item.id.toString()}`
											: isFilmPage
											? `/person/${item.id.toString()}`
											: item.id.toString()
									}
								>
									<a className='flex'>
										<Card
											sx={{
												width: 200,
												maxWidth: 345,
												height: 'initial',
												position: 'relative'
											}}
											className={`${styles.card_border} dark:bg-gray-800`}
										>
											{isFilmPage ? (
												<>
													<CardMedia>
														<PosterPreview src={item.photo} />
													</CardMedia>
													<CardContent>
														<Typography
															sx={{ fontSize: 14 }}
															color='text.secondary'
															gutterBottom
															className={`${styles.card_description} dark:text-zinc-400`}
														>
															{item.description || item.enProfession || item.enName}
														</Typography>
														<Typography
															variant='body2'
															color='text.primary'
															className={`${styles.card_title} dark:text-zinc-300`}
														>
															{item.name}
														</Typography>
													</CardContent>
												</>
											) : (
												<>
													<CardMedia>
														<PosterPreview src={item?.poster?.url} />
													</CardMedia>
													<CardContent>
														{!isFilmPage && (
															<Typography
																sx={{ fontSize: 14 }}
																color='text.secondary'
																gutterBottom
																className={`${styles.card_description} dark:text-zinc-400`}
															>
																{item.description || item.alternativeName || ''}
															</Typography>
														)}
														<Typography
															variant='body2'
															color='text.primary'
															className={`${styles.card_title} dark:text-zinc-300`}
														>
															{item.name || item.enName || item.alternativeName || ''}
														</Typography>
													</CardContent>
												</>
											)}
											{isPersonPage && item.rating && (
												<div className={`${styles.card_rating} dark:text-zinc-300`}>
													{item.rating}
												</div>
											)}
										</Card>
									</a>
								</Link>
							</div>
						))}
				</div>
			</div>
		</>
	)
}

export default React.memo(Carousel)
