import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { HelpRow, ValueRow, WaiverRow, VehicleRow } from './Rows'

import './style.scss'

const SingleItem = ({ name, currentPackage, coverages, isCustomized }) => {

  const ref = useRef()

  const [helpVisible, setHelpVisible] = useState(false)
  const [dir, setDir] = useState(null)

  const value = coverages[currentPackage][name]

  useEffect(() => {
    if (ref.current !== value) {
      if (value === 'No coverage') {
        setDir('down')
      } else if (Number(value) < Number(ref.current)) {
        setDir('down')
      } else {
        setDir('up')
      }
    }
    ref.current = value
    setTimeout(() => {
      setDir(null)
    }, 2000)
  }, [ref, value, name])

  const cls = classNames('SingleItem', {
    'Increased': dir === 'up',
    'Decreased': dir === 'down',
  })

  return (
    <div className={cls}>
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