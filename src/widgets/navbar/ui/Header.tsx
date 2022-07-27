import React from 'react'
import { useDispatch } from 'react-redux'

import { setSidebarActive } from '@/widgets/navbar/model/sidebarSlice'
import SearchAutoComplete from '@/widgets/navbar/ui/SearchAutoComplete'
import { AppDispatch } from '@/app/redux/store'
import { MenuIcon } from '@/shared/icons/mui'
import DarkModeSwitcher from '@/features/dark-mode/DarkModeSwitcher'
import styles from '@/widgets/navbar/styles/Header.module.scss'

const Header: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()

	const handleOpenSidebar = () => {
		dispatch(setSidebarActive())
	}

	return (
		<nav className={`${styles.nav_root} dark:bg-gray-800`}>
			<div className={styles.div_content}>
				<label className={`${styles.mobile_menu} dark:text-zinc-400`} onClick={handleOpenSidebar}>
					<MenuIcon />
				</label>
				<input className='hidden' type='checkbox' />
				<div className={styles.hidden_block} />
				<div className={styles.right_block}>
					<DarkModeSwitcher />
					<SearchAutoComplete />
				</div>
			</div>
		</nav>
	)
}

export default React.memo(Header)
