import React from 'react'
import ProfilePage from '@/components/pagecomponents/ProfilePage';
import MetaData from '@/components/metadata-component/MetaData';

const Profile = () => {
    return (
        <>
            <MetaData pageName="/profile" title={`Profile - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
            <ProfilePage />
        </>
    )
}

export default Profile;