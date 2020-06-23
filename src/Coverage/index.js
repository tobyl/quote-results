import React, { useContext } from 'react'
// import { CoverageItem, DepreciationItem, AccidentItem } from 'CoverageItem'
import SingleItem from 'SingleItem'
import CoveragePicker from 'CoveragePicker'
import { AppContext } from 'context'

import './style.scss'

const Coverage = ({ buying }) => {

  const { coverages, currentPackage, setCurrentPackage, changePackage, isCustomized, setIsCustomized, cancelCustomize, recalculatePrice } = useContext(AppContext)

  const handleCustomize = () => {
    setIsCustomized(true)
  }

  return (
    <div className={buying ? 'Coverage Buying' : 'Coverage'}>
      <div className={isCustomized ? 'PickerHolder Hidden' : 'PickerHolder'}>
        <CoveragePicker
          currentPackage={currentPackage}
          setCurrentPackage={setCurrentPackage}
          changePackage={changePackage}
        />
      </div>
      <div className="Customize text-center">
        <button className="Button Small Pill Light" onClick={isCustomized ? cancelCustomize : handleCustomize}>
          {isCustomized ? 'Remove Customization' : 'Customize Coverage'}
        </button>
      </div>
      {Object.keys(coverages[currentPackage]).map(cov =>
        <SingleItem
          key={cov}
          name={cov}
          currentPackage={currentPackage}
          coverages={coverages}
          isCustomized={isCustomized}
        />
      )}
      {isCustomized && (
        <div className="Recalculate">
          <button className="Button Small Pill Light" onClick={recalculatePrice}>
            Recalculate Price
        </button>
        </div>
      )}
    </div>
  )
}

export default Coverage