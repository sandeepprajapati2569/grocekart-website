import React from 'react'
import ResetPasswordPage from '@/components/pagecomponents/ResetPasswordPage'
import MetaData from '@/components/metadata-component/MetaData'

const ResetPassword = () => {
    return (
        <div>
            <MetaData pageName="/profile/reset-password" title={`Reset Password`} />
            <ResetPasswordPage />
        </div>
    )
}

export default ResetPassword