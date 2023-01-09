import React from 'react'
import type { AppProps } from 'next/app'

import AppLayout from '@/app/layout/AppLayout'

import '@/app/styles/tailwind.css'
import '@/app/styles/normilize.css'
import '@/app/styles/global.css'

// @ts-ignore
const isMobile: boolean = navigator?.userAgentData?.mobile || /iPhone|iPad|iPod|Android/i.test(navigator?.userAgent)

if (isMobile) {
	window.location.href = 'https://nextjs-kinopoisk.vercel.app/'
}

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	)
}

export default MyApp
