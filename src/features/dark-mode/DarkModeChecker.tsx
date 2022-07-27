import React, { useEffect } from 'react'
import { useTypedSelector } from '@/shared/hooks/useTypedSelector'
import { themeState } from '@/features/dark-mode/types'

const DarkModeChecker: React.FC = () => {
	const { theme } = useTypedSelector(themeState)

	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', '')
		}
		if (
			localStorage.getItem('theme') === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	return <></>
}

export default DarkModeChecker
