import React, { useState } from 'react'
import Head from 'next/head'
import HeaderGoBack from '@/shared/ui/header-go-back/HeaderGoBack'
import PreviewImage from '@/entities/movie/ui/header/PreviewImage'
import MovieInfo from '@/entities/movie/ui/header/MovieHeader'
import PersonDescription from '@/entities/movie/ui/main/PersonDescription'
import { TabContext } from '@mui/lab'
import { Box, Tab, Tabs } from '@mui/material'
import TabPanel from '@mui/lab/TabPanel'
import Carousel from '@/shared/ui/carousel/Carousel'
import FactsAboutMovie from '@/entities/movie/ui/tab-panel/FactsAboutMovie'
import { IPersonMovies, IPersonRoot } from '@/shared/api/types/IPersonRoot'
import styles from '@/entities/movie/styles/Person.module.scss'

interface IPersonProps {
	data: IPersonRoot
}

const Person: React.FC<IPersonProps> = ({ data }) => {
	const [activeTab, setActiveTab] = useState('1')

	const pageName = data.name || data.enName
	const carouselData = data.movies.filter((movie: IPersonMovies) => !!movie.name)

	const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
		setActiveTab(newValue)
	}

	return (
		<>
			<Head>
				<title>Кинопоиск | {pageName}</title>
			</Head>
			<section className={`${styles.section_root} dark:bg-gray-700`}>
				<div className={`${styles.container} container`}>
					<HeaderGoBack />
					<div className={styles.div_movie}>
						<PreviewImage src={data.photo} />
						<div className={styles.header}>
							<MovieInfo isPersonPage={true} title={pageName} altTitle={data.enName || ''} id={data.id} />
							<PersonDescription data={data} />
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
								<Tab label='Фильмы' value='1' className='dark:text-zinc-300' />
								{data.facts.length > 0 && (
									<Tab label='Факты' value='2' className='dark:text-zinc-300' />
								)}
							</Tabs>
						</Box>
						<TabPanel value='1'>
							<div className={`${styles.films} dark:text-zinc-300`}>
								{data.movies.length > 0 ? 'Фильмы' : 'Нет фильмов'}
							</div>
							<Carousel data={carouselData} isPersonPage={true} />
						</TabPanel>
						{data.facts.length > 0 && (
							<TabPanel value='2'>
								<FactsAboutMovie data={data} />
							</TabPanel>
						)}
					</TabContext>
				</div>
			</section>
		</>
	)
}

export default Person
