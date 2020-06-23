import React, { useContext } from 'react'
import Price from 'Price'
import LoadingSpinner from 'LoadingSpinner'
import { AppContext } from 'context'

import './style.scss'

const SimplePrice = () => {

  const { priceLoading } = useContext(AppContext)

  return priceLoading ? (
    <div className="SimplePrice Loading">
      <LoadingSpinner /> <span>Fetching updated price</span>
    </div>
  ) : (
    <div className="SimplePrice">
      <Price />
      <Price kind="YEAR" />
    </div>
  )
}

export default SimplePrice