import React from 'react'
import OrderHistoryPage from '@/components/pagecomponents/OrderHistoryPage'
import MetaData from '@/components/metadata-component/MetaData'

const OrderHistory = () => {
    return (
        <div>
            <MetaData pageName="/profile/order-history" title={`Order History - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <OrderHistoryPage />
        </div>
    )
}

export default OrderHistory