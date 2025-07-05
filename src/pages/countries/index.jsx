import MetaData from '@/components/metadata-component/MetaData'
import CountriesPage from '@/components/pagecomponents/CountriesPage'
import React from 'react'

const index = () => {
    return (
        <>
            <MetaData pageName="/countries" title={`Countries - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <CountriesPage />
        </>
    )
}

export default index
