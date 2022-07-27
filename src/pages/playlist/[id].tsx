import React from 'react'

import PlaylistByID from '@/pages-layer/playlist/PlaylistByID'
import { useRouter } from 'next/router'

const Playlist: React.FC = () => {
	const { id } = useRouter().query

	return <PlaylistByID id={id} />
}

export default Playlist
