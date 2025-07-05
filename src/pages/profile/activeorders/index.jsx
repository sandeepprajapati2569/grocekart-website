import React from 'react'
import ActiceOrdersPage from '@/components/pagecomponents/ActiveOrdersPage'
import MetaData from '@/components/metadata-component/MetaData'
const index = () => {
    return (
        <div>
            <MetaData pageName="/profile/active-orders" title={`Active Orders - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <ActiceOrdersPage />
        </div>
    )
}

export default index