import React from 'react'
import Image from 'next/image'

interface IPreviewPageProps {
	readonly src: string
}

const PreviewImage: React.FC<IPreviewPageProps> = ({ src }) => {
	return (
		<div className='relative md:mr-12 mx-auto w-fit'>
			<Image
				className='relative h-auto rounded overflow-hidden object-cover'
				style={{ aspectRatio: '2/3' }}
				width='450'
				height='800'
				src={src}
				placeholder='blur'
				blurDataURL='https://st.kp.yandex.net/images/no-poster.gif'
				alt='Preview image'
			/>
		</div>
	)
}

export default React.memo(PreviewImage)
