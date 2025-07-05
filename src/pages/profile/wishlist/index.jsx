import React from 'react'
import WishlistPage from '@/components/pagecomponents/WishlistPage'
import MetaData from '@/components/metadata-component/MetaData'

const Wishlist = () => {
    return (
        <div>
            <MetaData pageName="/profile/wishlist" title={`Wishlist - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <WishlistPage />
        </div>
    )
}

export default Wishlist