import MetaData from '@/components/metadata-component/MetaData'
import ContactUsPage from '@/components/pagecomponents/ContactUsPage'
import React from 'react'

const index = () => {
    return (
        <div>
            <MetaData pageName="/contact-us" title={`Contact Us - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <ContactUsPage />
        </div>
    )
}

export default index
