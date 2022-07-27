import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { TabContext } from '@mui/lab'
import { Box, Tab, Tabs } from '@mui/material'
import TabPanel from '@mui/lab/TabPanel'

import HeaderGoBack from '@/shared/ui/header-go-back/HeaderGoBack'
import PreviewImage from '@/entities/movie/ui/header/PreviewImage'
import MovieHeader from '@/entities/movie/ui/header/MovieHeader'
import Description from '@/entities/movie/ui/main/Description'
import { SequelsAndPrequels, SimilarMovies } from '@/entities/movie/ui/footer'
import FactsAboutMovie from '@/entities/movie/ui/tab-panel/FactsAboutMovie'
import Carousel from '@/shared/ui/carousel/Carousel'
import { IMovieProps } from '@/shared/api/types/IFilmRoot'
import styles from '@/entities/movie/styles/Movie.module.scss'

const Movie: React.FC<IMovieProps> = ({ data }) => {
	const [activeTab, setActiveTab] = useState('1')
	const pageName = data.name || data.enName || data.alternativeName
	const rating = data.rating.imdb !== 0 ? data.rating.imdb : data?.rating.kp
	const persons = data.persons.filter((person) => person.name !== '')

	const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
		setActiveTab(newValue)
	}

	return (
		<>
			<Head>
				<title>Кинопоиск | {pageName}</title>
			</Head>
			<section className={`${styles.section_root} dark:bg-gray-700 dark:dark`}>
				<div className={`${styles.container} container`}>
					<HeaderGoBack />
					<div className={styles.div_movie}>
						<PreviewImage src={data.poster.url} />
						<div className={styles.header}>
							<MovieHeader
								title={pageName}
								altTitle={data.alternativeName}
								id={data.id}
								year={data.year}
								rating={rating}
							/>
							<Description data={data} />
						</div>
					</div>
					<TabContext value={activeTab}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs
								value={activeTab}
								onChange={handleChangeTab}
								variant='scrollable'
								aria-label='react tabs'
							>
								<Tab label='Описание' value='1' className='dark:text-zinc-300' />
								<Tab label='Трейлеры' value='2' className='dark:text-zinc-300' />
								<Tab label='Актеры' value='3' className='dark:text-zinc-300' />
								{data.facts.length > 0 && (
									<Tab label='Факты' value='4' className='dark:text-zinc-300' />
								)}
							</Tabs>
						</Box>
						<TabPanel value='1'>
							<div className='md:text-2xl dark:text-zinc-300'>{data.description || '--'}</div>
						</TabPanel>
						<TabPanel value='2'>
							{data.videos.trailers.map((video) => (
								<div className='py-3' key={video._id}>
									<Link href={video.url}>
										<a className={`${styles.link} dark:text-zinc-300`}>{video.name}</a>
									</Link>
								</div>
							))}
						</TabPanel>
						<TabPanel value='3'>
							<Carousel data={persons} isFilmPage={true} />
						</TabPanel>
						{data.facts.length > 0 && (
							<TabPanel value='4'>
								<FactsAboutMovie data={data} />
							</TabPanel>
						)}
					</TabContext>
					<SequelsAndPrequels data={data} />
					<SimilarMovies data={data} />
				</div>
			</section>
		</>
	)
}

export default Movie
