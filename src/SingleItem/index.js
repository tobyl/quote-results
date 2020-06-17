import React, { useState } from 'react'
import { HelpRow, ValueRow, WaiverRow, VehicleRow } from './Rows'

import './style.scss'

const SingleItem = ({ name, currentPackage, coverages, isCustomized }) => {

  const [helpVisible, setHelpVisible] = useState(false)

  const value = coverages[currentPackage][name]

  return (
    <div className="SingleItem">
      {typeof value === 'boolean' ?
        <WaiverRow
          name={name}
          value={value}
          isCustomized={isCustomized}
          helpVisible={helpVisible}
          setHelpVisible={setHelpVisible}
        /> :
        <ValueRow
          name={name}
          value={value}
          isCustomized={isCustomized}
          helpVisible={helpVisible}
          setHelpVisible={setHelpVisible}
        />
      }
      {typeof value === 'boolean' && (
        <VehicleRow
          name={name}
          value={value}
        />
      )}
      <HelpRow
        helpVisible={helpVisible}
        name={name}
      />
    </div>
  )
}

export default SingleItem