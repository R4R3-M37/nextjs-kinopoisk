import React from 'react'

import DocumentMetaSeo from '@/app/layout/ui/DocumentMeta/DocumentMetaSeo'
import DocumentMetaView from '@/app/layout/ui/DocumentMeta/DocumentMetaView'

const DocumentMeta: React.FC = () => {
	return (
		<>
			<meta charSet='UTF-8' />
			<DocumentMetaView />
			<DocumentMetaSeo />
		</>
	)
}

export default DocumentMeta
