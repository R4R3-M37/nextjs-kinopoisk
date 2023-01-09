import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'

import AppLayout from '@/app/layout/AppLayout'

import '@/app/styles/tailwind.css'
import '@/app/styles/normilize.css'
import '@/app/styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	
	useEffect(() => {
		// @ts-ignore
		const isMobile: boolean = navigator?.userAgentData?.mobile || /iPhone|iPad|iPod|Android/i.test(navigator?.userAgent)
		
		if (isMobile) {
			window.location.href = 'https://cinemata.vercel.app/'
		}
	}, [])
	
	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	)
}

export default MyApp
