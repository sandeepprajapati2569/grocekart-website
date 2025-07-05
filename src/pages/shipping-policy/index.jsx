import MetaData from '@/components/metadata-component/MetaData'
import ShippingPolicyPage from '@/components/pagecomponents/ShippingPolicyPage'
import React from 'react'

const index = () => {
    return (
        <div>
            <MetaData pageName="/shipping-policy" title={`Shipping Policy - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <ShippingPolicyPage />
        </div>
    )
}

export default index
