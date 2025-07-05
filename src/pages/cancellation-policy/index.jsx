import MetaData from '@/components/metadata-component/MetaData'
import CancellationPolicyPage from '@/components/pagecomponents/CancellationPolicyPage'
import React from 'react'

const index = () => {
    return (
        <div>
            <MetaData pageName="/cancellation-policy" title={`Cancellation Policy - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <CancellationPolicyPage />
        </div>
    )
}

export default index
