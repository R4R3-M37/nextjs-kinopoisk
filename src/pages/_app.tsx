import React from 'react'
import type { AppProps } from 'next/app'

import AppLayout from '@/app/layout/AppLayout'

import '@/app/styles/tailwind.css'
import '@/app/styles/normilize.css'
import '@/app/styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<AppLayout>
			<Component {...pageProps} />
		</AppLayout>
	)
}

export default MyApp
