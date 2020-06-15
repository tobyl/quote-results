import React from 'react'

const Dollar = () => {
  return (
    <div className="Dollar">
      $
    </div>
  )
}

const Value = ({ val }) => {
  return (
    <div className="Value">
      {val}
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

const BuyNow = ({ buying, setBuying }) => {

  return (
    <div className="BuyNow">
      <div className="Price">
        <div className="Monthly">
          <Dollar /><Value val="241" /><Per kind="MONTH" />
        </div>
        <div className="Yearly">
          <Dollar /><Value val="2862" /><Per kind="YEAR" />
        </div>
      </div>
      <button className={buying ? 'Button BuyBtn Active' : 'Button BuyBtn'} onClick={() => setBuying(true)}>
        <span>Buy</span>
        <strong>Now</strong>
      </button>
    </div>
  )
}

export default BuyNow