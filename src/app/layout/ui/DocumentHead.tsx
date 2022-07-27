import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import DocumentMeta from '@/app/layout/ui/DocumentMeta/DocumentMeta'

const ALL_PAGE_TITLES: any = {
	'/': 'Кинопоиск | Главная',
	'/films': 'Кинопоиск | Фильмы',
	'/series': 'Кинопоиск | Сериалы',
	'/cartoons': 'Кинопоиск | Мультфильмы',
	'/anime': 'Кинопоиск | Аниме',
	'/favorite': 'Кинопоиск | Избранное',
	'/person': 'Кинопоиск | Актёр',
	'/search': 'Кинопоиск | Поиск',
	'/playlist': 'Кинопоиск | Плейлист'
}

const ALL_PAGE_OG_TITLE: any = {
	'/': 'фильмы',
	'/films': 'фильмы',
	'/series': 'сериалы',
	'/cartoons': 'мультфильмы',
	'/anime': 'аниме'
}

const DocumentHead: React.FC = () => {
	const { pathname } = useRouter()
	const pageTitle = ALL_PAGE_TITLES[pathname]

	return (
		<Head>
			<DocumentMeta />
			<meta
				property='og:title'
				content={`Смотреть ${
					ALL_PAGE_OG_TITLE[pathname] || 'фильмы'
				} онлайн в хорошем качестве Full HD 720 и 1080. Лучшие новинки уже в онлайн-кинотеатре!`}
			/>
			<title>{pageTitle}</title>
		</Head>
	)
}

export default DocumentHead
