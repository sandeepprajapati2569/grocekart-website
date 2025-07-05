import React from 'react'
import AddressPage from '@/components/pagecomponents/AddressPage'
import MetaData from '@/components/metadata-component/MetaData'
const Address = () => {
    return (
        <div>
            <MetaData pageName="/profile/address" title={`Address - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <AddressPage />
        </div>
    )
}

export default Address