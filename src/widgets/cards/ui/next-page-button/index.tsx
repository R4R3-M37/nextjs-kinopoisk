import React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import LoadingButton from '@mui/lab/LoadingButton'

import { ILoadingButtonCardListProps, IPaginationCardListProps } from '@/shared/types/global'
import { Pagination } from '@mui/material'

export const LoadingButtonCardList: React.FC<ILoadingButtonCardListProps> = ({ handleNextPage }) => {
	return (
		<Grid container justifyContent='center' alignItems='center' className='mb-5 mt-6 px-6'>
			<Stack spacing={2} className='pt-6'>
				<LoadingButton
					size='large'
					onClick={handleNextPage}
					variant='outlined'
					className='dark:bg-zinc-300 dark:text-zinc-800'
				>
					Загрузить еще
				</LoadingButton>
			</Stack>
		</Grid>
	)
}

export const PaginationCardList: React.FC<IPaginationCardListProps> = ({ activePage, handleChangePage, count }) => {
	return (
		<Grid container justifyContent='center' alignItems='center'>
			<Stack spacing={2} className='pt-6'>
				<Pagination
					count={count}
					page={activePage}
					onChange={handleChangePage}
					className='dark:bg-zinc-200 rounded py-2'
				/>
			</Stack>
		</Grid>
	)
}
