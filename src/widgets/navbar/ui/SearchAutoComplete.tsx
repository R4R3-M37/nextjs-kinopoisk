import React, { SyntheticEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import Link from 'next/link'
import { Box } from '@mui/material'

import { useGetFilmByNameQuery } from '@/shared/api'
import useDebounce from '@/shared/hooks/useDebounce'
import { ROUTE_TYPE } from '@/entities/card/CardItem'
import { IFilmData } from '@/shared/api/types/IFilmRoot'

const PRELOAD_AUTO_COMPLETE: any[] = [
	{
		id: 590286,
		type: 'movie',
		name: 'Бэтмен'
	},
	{
		id: 1219909,
		type: 'movie',
		name: 'Доктор Стрэндж: В мультивселенной безумия'
	},
	{
		id: 714185,
		type: 'movie',
		name: 'Проект «Адам»'
	},
	{
		id: 572032,
		type: 'movie',
		name: 'Топ Ган: Мэверик'
	},
	{
		id: 468373,
		type: 'movie',
		name: 'Анчартед: На картах не значится'
	}
]

const SearchAutoComplete = () => {
	const [inputValue, setInputValue] = useState<string>('')
	const debouncedValue = useDebounce(inputValue, 200)
	const { data: dataFilms } = useGetFilmByNameQuery(debouncedValue, { skip: debouncedValue.length < 3 })

	const handleInputChange = (e: SyntheticEvent, newInputValue: string) => {
		setInputValue(newInputValue)
	}

	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				freeSolo
				disableClearable
				id='search-auto-complete'
				options={dataFilms?.docs || PRELOAD_AUTO_COMPLETE}
				getOptionLabel={(option: any) => option.name || option.alternativeName || option.enName}
				className='bg-gray-50 rounded'
				renderOption={(props, option: IFilmData) => (
					<Box component='li' {...props}>
						<Link href={`/${option.type[ROUTE_TYPE] || 'films/'}/${option.id}`} key={option.id}>
							<a>{option.name || option.alternativeName || option.enName}</a>
						</Link>
					</Box>
				)}
				onInputChange={(e, inputValue: string) => handleInputChange(e, inputValue)}
				renderInput={(params) => (
					<TextField
						{...params}
						label='Поиск...'
						InputProps={{
							...params.InputProps,
							type: 'search'
						}}
					/>
				)}
			/>
		</Stack>
	)
}

export default SearchAutoComplete
