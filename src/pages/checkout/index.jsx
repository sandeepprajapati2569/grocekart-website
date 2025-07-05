import React from 'react'
import CheckoutPage from '@/components/pagecomponents/CheckoutPage'
import MetaData from '@/components/metadata-component/MetaData'

const index = () => {
    return (
        <div>
            <MetaData pageName="/checkout" title={`Checkout - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <CheckoutPage />
        </div>
    )
}

export default index