import React from 'react'
import { useRouter } from 'next/router'

import styles from '@/shared/ui/header-go-back/styles/HeaderGoBack.module.scss'
import { ArrowBackIcon } from '@/shared/icons/mui'

const HeaderGoBack: React.FC = () => {
	const { back } = useRouter()

	return (
		<div className={styles.div_root}>
			<span onClick={back} className={styles.span_header}>
				<ArrowBackIcon />
				Назад
			</span>
		</div>
	)
}

export default React.memo(HeaderGoBack)
