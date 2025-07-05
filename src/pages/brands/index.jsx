import MetaData from '@/components/metadata-component/MetaData'
import BrandsPage from '@/components/pagecomponents/BrandsPage'
import React from 'react'

const index = () => {
    return (
        <>
            <MetaData pageName="/brands" title={`Brands - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <BrandsPage />
        </>
    )
}

export default index
