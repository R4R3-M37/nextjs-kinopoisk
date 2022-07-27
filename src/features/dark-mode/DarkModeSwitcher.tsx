import React from 'react'
import { useDispatch } from 'react-redux'

import { DarkModeIcon, LightModeIcon } from '@/shared/icons/mui'
import { AppDispatch } from '@/app/redux/store'
import { useTypedSelector } from '@/shared/hooks/useTypedSelector'
import { setDarkTheme, setLightTheme } from '@/features/dark-mode/model/themeSwitcherSlice'
import { themeState } from '@/features/dark-mode/types'
import styles from '@/features/dark-mode/styles/DarkModeSwitcher.module.scss'

const DarkModeSwitcher: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const { theme } = useTypedSelector(themeState)

	const handleSetLightTheme = () => {
		dispatch(setLightTheme())
		document.documentElement.classList.remove('dark')
	}

	const handleSetDarkTheme = () => {
		dispatch(setDarkTheme())
		document.documentElement.classList.add('dark')
	}

	return (
		<button
			type='button'
			className={`${styles.button_root} dark:text-gray-400 dark:focus:ring-gray-700 dark:hover:bg-gray-700`}
		>
			{theme === 'dark' ? (
				<LightModeIcon onClick={handleSetLightTheme} />
			) : (
				<DarkModeIcon onClick={handleSetDarkTheme} />
			)}
		</button>
	)
}

export default DarkModeSwitcher
