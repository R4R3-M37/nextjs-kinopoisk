import React, { useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { setSidebarClose } from '@/widgets/navbar/model/sidebarSlice'
import { useTypedSelector } from '@/shared/hooks/useTypedSelector'
import { AppDispatch } from '@/app/redux/store'
import {
	ChildCareOutlinedIcon,
	FavoriteBorderIcon,
	LiveTvOutlinedIcon,
	MovieCreationOutlinedIcon,
	MovieIcon,
	PlayCircleIcon,
	SearchIcon,
	WeekendOutlinedIcon
} from '@/shared/icons/mui'
import { sidebarState } from '@/features/scroll-disabler/types'
import styles from '@/widgets/navbar/styles/Sidebar.module.scss'

const Sidebar: React.FC = () => {
	const { asPath } = useRouter()
	const dispatch: AppDispatch = useDispatch()
	const { sidebarActive } = useTypedSelector(sidebarState)

	const sidebarItems = useMemo(
		() => [
			{ icon: <WeekendOutlinedIcon />, route: '/', title: 'Главная', active: asPath === '/' },
			{
				icon: <MovieCreationOutlinedIcon />,
				route: '/films',
				title: 'Фильмы',
				active: asPath.includes('/films')
			},
			{ icon: <LiveTvOutlinedIcon />, route: '/series', title: 'Сериалы', active: asPath.includes('/series') },
			{
				icon: <ChildCareOutlinedIcon />,
				route: '/cartoons',
				title: 'Мультфильмы',
				active: asPath.includes('/cartoons')
			},
			{ icon: <MovieIcon />, route: '/anime', title: 'Аниме', active: asPath.includes('/anime') },
			{
				icon: <FavoriteBorderIcon />,
				route: '/favorite',
				title: 'Избранное',
				active: asPath.includes('/favorite')
			},
			{
				icon: <SearchIcon />,
				route: '/search',
				title: 'Поиск',
				active: asPath.includes('/search') || asPath.includes('/person') || asPath.includes('/playlist')
			}
		],
		[asPath]
	)

	const handleCloseSidebar = () => {
		dispatch(setSidebarClose())
	}

	useEffect(() => {
		if (sidebarActive) {
			dispatch(setSidebarClose())
		}
	}, [asPath])

	return (
		<>
			<aside
				className={
					sidebarActive
						? `${styles.aside_root} translate-x-0 dark:bg-gray-800 dark:text-zinc-300 peer`
						: `${styles.aside_root} target:translate-x-0 dark:bg-gray-800 dark:text-zinc-300`
				}
			>
				<nav>
					<Link href='/'>
						<a className={styles.main_title_block}>
							<PlayCircleIcon />
							<span className={`${styles.span_title_text} dark:text-zinc-300`}>Кинопоиск</span>
						</a>
					</Link>
					<ul className='space-y-2'>
						{sidebarItems.map((item) => (
							<li key={item.title}>
								<Link href={item.route}>
									<a
										className={
											item.active
												? `${styles.sidebar_active} dark:text-zinc-300 dark:hover:bg-gray-700`
												: `${styles.sidebar_closed} dark:text-zinc-300 dark:hover:bg-gray-700`
										}
									>
										{item.icon}
										<span className={`${styles.sidebar_list_span} dark:text-zinc-300`}>
											{item.title}
										</span>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</aside>
			<div
				onClick={handleCloseSidebar}
				className={sidebarActive ? `${styles.sidebar_layout_active}` : `${styles.sidebar_layout_close}`}
			/>
		</>
	)
}

export default React.memo(Sidebar)
