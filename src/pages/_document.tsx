import React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const isMobile: boolean = navigator?.userAgentData?.mobile || /iPhone|iPad|iPod|Android/i.test(navigator?.userAgent)

if (isMobile) {
	window.location.href = 'https://cinemata.vercel.app/'
}

const Document: React.FC = () => {
	return (
		<Html lang='ru'>
			<Head>
				<link rel='manifest' href='/manifest.json' />
				<link rel='shortcut icon' href='/favicon.ico' type='image/ico' />
				<title>Кинопоиск | Страница не найдена</title>
			</Head>
			<body className='dark:bg-gray-700'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
