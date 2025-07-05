import MetaData from '@/components/metadata-component/MetaData'
import PrivacyPolicyPage from '@/components/pagecomponents/PrivacyPolicyPage'
import React from 'react'

const index = () => {
    return (
        <div>
            <MetaData pageName="/privacy-policy" title={`Privacy Policy - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <PrivacyPolicyPage />
        </div>
    )
}

export default index
