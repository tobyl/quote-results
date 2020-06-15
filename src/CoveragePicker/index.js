import React from 'react'

import './style.scss'

const CoveragePicker = ({ currentPackage, changePackage }) => {

  const cls = pack => {
    if (currentPackage === pack) {
      return ' Active'
    }
    return ''
  }

  return (
    <div className="CoveragePicker clearfix">
      <button className={'Button Good' + cls('good')} onClick={() => changePackage('good')}>
        Base
        <span>Coverage</span>
      </button>
      <button className={'Button Recommended' + cls('recommended')} onClick={() => changePackage('recommended')}>
        Costco
        <span>Recommended!</span>
        Package
      </button>
      <button className={'Button Highest' + cls('highest')} onClick={() => changePackage('highest')}>
        Highest
        <span>Coverage</span>
      </button>
    </div>
  )
}

export default CoveragePicker