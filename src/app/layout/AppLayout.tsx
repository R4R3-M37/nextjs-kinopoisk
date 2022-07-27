import React from 'react'
import { Provider } from 'react-redux'
import NextNProgress from 'nextjs-progressbar'

import { store } from '@/app/redux/store'
import { Header, Sidebar } from '@/widgets/navbar'
import DocumentHead from '@/app/layout/ui/DocumentHead'
import DarkModeChecker from '@/features/dark-mode/DarkModeChecker'
import ScrollDisabler from '@/features/scroll-disabler/ScrollDisabler'
import { IAppLayoutProps } from '@/app/layout/types'
import styles from '@/app/layout/styles/AppLayout.module.scss'

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
	return (
		<>
			<DocumentHead />
			<NextNProgress />
			<Provider store={store}>
				<DarkModeChecker />
				<ScrollDisabler />
				<div className={styles.div_root}>
					<Sidebar />
					<div className={styles.div_block}>
						<Header />
						{children}
					</div>
				</div>
			</Provider>
		</>
	)
}

export default AppLayout
