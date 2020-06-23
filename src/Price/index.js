import React, { useContext } from 'react'
import { AppContext } from 'context'

import './style.scss'

const Dollar = () => {
  return (
    <div className="Dollar">
      $
    </div>
  )
}

const Value = ({ val, isCustomized }) => {
  return (
    <div className="Value">
      {isCustomized ? '***' : val}
    </div>
  )
}

const Per = ({ kind }) => {
  return (
    <div className="Per">
      PER<br />
      {kind}
    </div>
  )
}

const Price = ({ kind }) => {

  const { isCustomized, monthlyPrice, customizedPrice } = useContext(AppContext)



  let finalVal = (kind && kind.toLowerCase() === 'year') ? monthlyPrice * 12 : monthlyPrice

  if (customizedPrice) {

    finalVal = (kind && kind.toLowerCase() === 'year') ? customizedPrice * 12 : customizedPrice

    return (
      <div className={kind && kind.toLowerCase() === 'year' ? 'Price Yearly' : 'Price Monthly'}>
        <Dollar /><Value val={finalVal} isCustomized={false} /><Per kind={kind ? kind : 'MONTH'} /> 
      </div>
    )
  }

  return (
    <div className = {kind && kind.toLowerCase() === 'year' ? 'Price Yearly' : 'Price Monthly'}>
      <Dollar /><Value val={finalVal} isCustomized={isCustomized} /><Per kind={kind ? kind : 'MONTH'} /> 
    </div>
  )
}

export default Price