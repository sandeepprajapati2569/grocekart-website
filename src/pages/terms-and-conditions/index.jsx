import MetaData from '@/components/metadata-component/MetaData'
import TermsAndCondititionsPage from '@/components/pagecomponents/TermsAndCondititionsPage'
import React from 'react'

const index = () => {
    return (
        <div>
            <MetaData pageName="/terms-and-conditions" title={`Terms And Conditions - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <TermsAndCondititionsPage />
        </div>
    )
}

export default index
