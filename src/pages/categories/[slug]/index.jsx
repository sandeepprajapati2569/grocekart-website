import React from 'react'
import CategoriesPages from '@/components/pagecomponents/CategoriesPages'
import MetaData from '@/components/metadata-component/MetaData'

const Categories = () => {
    return (
        <>
            <MetaData pageName="/categories/all" title={`Categories - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <CategoriesPages />
        </>
    )
}

export default Categories