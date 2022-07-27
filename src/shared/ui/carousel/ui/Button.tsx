import React from 'react'
import { Button } from '@mui/material'

import styles from '@/shared/ui/carousel/styles/Carousel.module.scss'
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons/mui'

interface IButtonArrowProps {
	handleNextSlice?: () => void
	handlePrevSlice?: () => void
}

export const ButtonRightArrow: React.FC<IButtonArrowProps> = ({ handleNextSlice }) => {
	return (
		<Button onClick={handleNextSlice} className={`${styles.button_arrow} dark:bg-blue-200`}>
			<ArrowRightIcon />
		</Button>
	)
}

export const ButtonLeftArrow: React.FC<IButtonArrowProps> = ({ handlePrevSlice }) => {
	return (
		<Button onClick={handlePrevSlice} className={`${styles.button_arrow} dark:bg-blue-200`}>
			<ArrowLeftIcon />
		</Button>
	)
}
