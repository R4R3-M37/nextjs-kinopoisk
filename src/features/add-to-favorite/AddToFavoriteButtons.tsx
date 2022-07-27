import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { BookmarkAdd, BookmarkAdded } from '@mui/icons-material'
import { AppDispatch } from '@/app/redux/store'
import { removeFavoriteFilm, setFavoriteFilm } from '@/features/add-to-favorite/model/favoriteFilmsSlice'
import { favoriteFilmsState, IAddToFavoriteButtonProps } from '@/features/add-to-favorite/types'
import styles from '@/features/add-to-favorite/styles/AddToFavoriteButtons.module.scss'

const AddToFavoriteButtons: React.FC<IAddToFavoriteButtonProps> = ({ id }) => {
	const dispatch: AppDispatch = useDispatch()
	const { favoriteFilms } = useSelector(favoriteFilmsState)

	const handleAddToFavorite = () => {
		dispatch(favoriteFilms.includes(id) ? dispatch(removeFavoriteFilm(id)) : dispatch(setFavoriteFilm(id)))
	}

	return (
		<Button
			variant='outlined'
			size='large'
			onClick={handleAddToFavorite}
			className={`${styles.button_root} dark:bg-zinc-300 dark:text-zinc-800`}
		>
			{favoriteFilms.includes(id) ? (
				<>
					<BookmarkAdded />В избранном
				</>
			) : (
				<>
					<BookmarkAdd />
					Буду смотреть
				</>
			)}
		</Button>
	)
}

export default React.memo(AddToFavoriteButtons)
