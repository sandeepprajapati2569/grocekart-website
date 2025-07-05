import React from 'react'
import PaymentStatusPage from '@/components/pagecomponents/PaymentStatusPage'
import MetaData from '@/components/metadata-component/MetaData'

const index = () => {
    return (
        <>
            <MetaData pageName="/web-payment-status" title={`Payment Status - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <PaymentStatusPage />
        </>
    )
}

export default index