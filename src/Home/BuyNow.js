import React from 'react'
import Price from 'Price'
import LoadingSpinner from 'LoadingSpinner'

const BuyNow = ({ buying, setBuying, priceLoading }) => {

  return (
    <div className="BuyNow">
      {priceLoading ? (
        <div className="BuyNowPrice Loading">
          <LoadingSpinner />
          <p>Fetching updated price</p>
        </div>
      ) : (
        <div className="BuyNowPrice">
          <div className="Monthly">
            <Price />
          </div>
          <div className="Yearly">
            <Price kind="YEAR" />
          </div>
        </div>
      )}
      <button className={buying ? 'Button BuyBtn Active' : 'Button BuyBtn'} onClick={() => setBuying(true)}>
        <span>Buy</span>
        <strong>Now</strong>
      </button>
    </div>
  )
}

export default BuyNow