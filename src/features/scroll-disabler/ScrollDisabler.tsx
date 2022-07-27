import React, { useEffect } from 'react'

import { useTypedSelector } from '@/shared/hooks/useTypedSelector'
import { searchMenuState, sidebarState } from '@/features/scroll-disabler/types'

const ScrollDisabler: React.FC = () => {
	const { sidebarActive } = useTypedSelector(sidebarState)
	const { searchMenuActive } = useTypedSelector(searchMenuState)

	useEffect(() => {
		if (sidebarActive) {
			document.documentElement.classList.add('scroll-disabled')
		} else if (searchMenuActive) {
			document.documentElement.classList.add('scroll-disabled')
		} else {
			document.documentElement.classList.remove('scroll-disabled')
		}
	}, [sidebarActive, searchMenuActive])

	return <></>
}

export default ScrollDisabler
