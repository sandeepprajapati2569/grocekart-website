import React from 'react'
import TransactionHistory from '@/components/pagecomponents/TransactionHistoryPage'
import MetaData from '@/components/metadata-component/MetaData'

const Transaction = () => {
  return (
    <div>
      <MetaData pageName="/profile/transactions" title={`Transactions - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
      <TransactionHistory />
    </div>
  )
}

export default Transaction