import React, { useContext } from 'react'
import { CoverageItem, DepreciationItem, AccidentItem } from 'CoverageItem'
import CoveragePicker from 'CoveragePicker'
import { AppContext } from 'context'

import './style.scss'

const Coverage = ({ buying }) => {

  const { setCustomize, coverages, currentPackage, setCurrentPackage, changePackage, isCustomized, setIsCustomized, cancelCustomize } = useContext(AppContext)

  const handleCustomize = () => {
    setCustomize(true)
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
        <CoverageItem
          key={cov}
          name={cov}
          value={coverages[currentPackage][cov]}
        />
      )}
      <DepreciationItem />
      <AccidentItem />
    </div>
  )
}

export default Coverage