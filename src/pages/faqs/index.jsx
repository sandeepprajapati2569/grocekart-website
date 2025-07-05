import MetaData from '@/components/metadata-component/MetaData'
import FAQsPage from '@/components/pagecomponents/FAQsPage'
import React from 'react'

const index = () => {
  return (
    <div>
      <MetaData pageName="/faqs" title={`FAQs - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
      <FAQsPage />
    </div>
  )
}

export default index
