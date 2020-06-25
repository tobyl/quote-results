import React from 'react'
import Price from 'Price'

import './style.scss'

const Complete = () => {

  return (
    <div className="Complete">
      <div className="text-center">
        <p>You've made a</p>
        <h1>Great Choice!</h1>
      </div>
      <div className="PriceCircle">
        <div>
          <Price kind="MONTH" />
          <Price kind="YEAR" />
        </div>
      </div>
      <p className="text-center">Thank you for submitting your information! We will contact you shortly. If you need to call us, our number is <a href="tel:1-866-967-7707">1-866-967-7707</a>.</p>
    </div>
  )
}

export default Complete