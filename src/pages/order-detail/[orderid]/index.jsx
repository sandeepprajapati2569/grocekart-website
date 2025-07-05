import React from 'react'
import OrderDetailPage from '@/components/pagecomponents/OrderDetailPage'
import MetaData from '@/components/metadata-component/MetaData'

const index = () => {
    return (
        <div>
            <MetaData pageName="/order-detail/" title={`Order Details - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <OrderDetailPage />
        </div>
    )
}

export default index