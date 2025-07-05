import MetaData from '@/components/metadata-component/MetaData'
import ReturnExchangePolicyPage from '@/components/pagecomponents/ReturnExchangePolicyPage'
import React from 'react'

const index = () => {
    return (
        <div>
            <MetaData pageName="/return-and-exchange-policy" title={`Return and Exchange Policy - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <ReturnExchangePolicyPage />
        </div>
    )
}

export default index
