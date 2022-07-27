import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import TextField from '@mui/material/TextField'

import { AppDispatch } from '@/app/redux/store'
import { setYear } from '@/pages-layer/search/model/searchSlice'
import styles from '@/pages-layer/search/styles/SearchDatePickYear.module.scss'
import { currentYear } from '@/shared/config'

const SearchDatePickYear: React.FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const [firstYear, setFirstYear] = useState<any>(null)
	const [secondYear, setSecondYear] = useState<any>(null)

	const handleSetYear = () => {
		const firstYearString = firstYear && firstYear.getFullYear().toString()
		const secondYearString = secondYear && secondYear.getFullYear().toString()

		const isFirstYearAllowed = firstYearString && firstYearString.length === 4
		const isSecondYearAllowed = secondYearString && secondYearString.length === 4

		if (isFirstYearAllowed && isSecondYearAllowed) {
			if (firstYearString && !secondYearString) {
				dispatch(setYear(firstYearString))
			}
			if (firstYearString && secondYearString) {
				dispatch(setYear(`${firstYearString}-${secondYearString}`))
			}
			if (secondYearString && !firstYearString) {
				dispatch(setYear(secondYearString))
			}
		}
	}

	useEffect(() => {
		handleSetYear()
		if (firstYear === '' || secondYear === '') {
			dispatch(setYear(null))
		}
	}, [firstYear, secondYear])

	return (
		<>
			<div className={styles.div_root}>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						views={['year']}
						label={'От какого года выхода?'}
						minDate={new Date(`1960`)}
						maxDate={new Date(`${currentYear}`)}
						className={`${styles.date_picker_root} dark:text-zinc-300`}
						value={firstYear}
						onChange={(newValue) => {
							setFirstYear(newValue)
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								className={`${styles.date_picker_root} dark:text-zinc-300`}
								helperText={params?.inputProps?.placeholder}
							/>
						)}
					/>
				</LocalizationProvider>
			</div>
			<div className={`${styles.div_root} py-3`}>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						views={['year']}
						label={'До какого года выхода?'}
						minDate={new Date(`1960`)}
						maxDate={new Date(`${currentYear}`)}
						className={`${styles.date_picker_root} dark:text-zinc-300`}
						value={secondYear}
						onChange={(newValue) => {
							setSecondYear(newValue)
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								className={`${styles.date_picker_root} dark:text-zinc-300`}
								helperText={params?.inputProps?.placeholder}
							/>
						)}
					/>
				</LocalizationProvider>
			</div>
		</>
	)
}

export default SearchDatePickYear
