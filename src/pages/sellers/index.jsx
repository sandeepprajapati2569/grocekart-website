import MetaData from '@/components/metadata-component/MetaData'
import SellersPage from '@/components/pagecomponents/SellersPage'
import React from 'react'

const index = () => {
    return (
        <>
            <MetaData pageName="/sellers" title={`Sellers - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <SellersPage />
        </>
    )
}

export default index
