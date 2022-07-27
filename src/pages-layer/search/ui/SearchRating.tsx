import React, { useEffect, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/redux/store'
import { setRating } from '@/pages-layer/search/model/searchSlice'
import styles from '@/pages-layer/search/styles/SearchRating.module.scss'

const numbersArray: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const SearchRating: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const [firstValue, setFirstValue] = useState<string | null>(numbersArray[0])
	const [secondValue, setSecondValue] = useState<string | null>(numbersArray[numbersArray.length - 1])

	const handleSetRating = () => {
		if (firstValue && !secondValue) {
			dispatch(setRating(firstValue))
		}
		if (firstValue && secondValue) {
			dispatch(setRating(`${firstValue}-${secondValue}`))
		}
		if (secondValue && !firstValue) {
			dispatch(setRating(secondValue))
		}
	}

	useEffect(() => {
		handleSetRating()
	}, [firstValue, secondValue])

	return (
		<>
			<div className={styles.div_root}>
				<Autocomplete
					disablePortal
					id='rating-textarea'
					value={firstValue}
					className={styles.autocomplete_root}
					onChange={(event: any, newValue: string | null) => {
						setFirstValue(newValue)
					}}
					options={numbersArray}
					sx={{ width: 300 }}
					renderInput={(params) => (
						<TextField {...params} label='Рейтинг от' className={styles.autocomplete_root} type='number' />
					)}
				/>
			</div>
			<div className={styles.div_root}>
				<Autocomplete
					disablePortal
					id='rating-textarea-2'
					value={secondValue}
					className={styles.autocomplete_root}
					onChange={(event: any, newValue: string | null) => {
						setSecondValue(newValue)
					}}
					options={numbersArray}
					sx={{ width: 300 }}
					renderInput={(params) => (
						<TextField {...params} label='Рейтинг до' className={styles.autocomplete_root} type='number' />
					)}
				/>
			</div>
		</>
	)
}

export default SearchRating
