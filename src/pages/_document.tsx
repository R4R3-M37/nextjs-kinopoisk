import React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

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
