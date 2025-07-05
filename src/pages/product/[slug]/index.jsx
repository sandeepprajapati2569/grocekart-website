import React from 'react'
import ProductDescriptionPage from '@/components/pagecomponents/ProductDescriptionPage'
import MetaData from '@/components/metadata-component/MetaData'

const Product = () => {
    return (
        <div>
            <MetaData pageName="/product/" title={`Product Details - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <ProductDescriptionPage />
        </div>
    )
}

export default Product