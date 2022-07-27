import { useEffect, useRef } from 'react'

const useHorizontalScroll = () => {
	const elRef = useRef()
	useEffect(() => {
		const element: any = elRef.current
		if (element) {
			const onWheel = (e: any) => {
				e.preventDefault()
				element.scrollTo({
					left: element.scrollLeft + e.deltaY,
					behavior: 'auto'
				})
			}
			element.addEventListener('wheel', onWheel)
			return () => element.removeEventListener('wheel', onWheel)
		}
	}, [])
	return elRef
}

export default useHorizontalScroll
