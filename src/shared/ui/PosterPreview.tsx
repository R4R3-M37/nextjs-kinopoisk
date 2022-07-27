import React from 'react'
import Image from 'next/image'

import { NO_POSTER } from '@/shared/config'

interface IPosterImage {
	src: string
}

const PosterPreview: React.FC<IPosterImage> = ({ src }) => {
	return (
		<Image
			src={src || NO_POSTER}
			placeholder='blur'
			blurDataURL='https://st.kp.yandex.net/images/no-poster.gif'
			width={675}
			height={1000}
			alt='Preview logo'
		/>
	)
}

export default PosterPreview
