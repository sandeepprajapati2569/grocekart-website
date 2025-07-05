import React from 'react'
import Layout from '@/components/layout/Layout'
import ProductsPage from '@/components/pagecomponents/Productspage'
import MetaData from '@/components/metadata-component/MetaData'

const Products = () => {
    return (
        <>
            <MetaData pageName="/products" title={`Products - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <ProductsPage />
        </>
    )
}

export default Products