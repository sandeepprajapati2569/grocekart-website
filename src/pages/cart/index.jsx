import React from 'react'
import CartPage from '@/components/pagecomponents/CartPage'
import MetaData from '@/components/metadata-component/MetaData'

const index = () => {
    return (
        <>
            <MetaData pageName="/cart" title={`Cart - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <CartPage />
        </>
    )
}

export default index