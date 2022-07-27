interface Root {
	favoriteFilms: IFavoriteFilms
}

interface IFavoriteFilms {
	favoriteFilms: any
}

export interface IAddToFavoriteButtonProps {
	id: string
}

export const favoriteFilmsState = (state: Root) => state.favoriteFilms
