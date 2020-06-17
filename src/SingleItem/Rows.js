import React, { useContext } from 'react'
import numeral from 'numeral'
import HelpBtn from './HelpBtn'
import Modify from './Modify'
import copy from 'copy'
import { AppContext } from 'context'

export const HelpRow = ({ name, helpVisible }) => {
  return (
    <div className={helpVisible ? 'HelpRow Visible' : 'HelpRow'}>
      <p>
        {copy[name].help}
      </p>
    </div>
  )
}

export const VehicleRow = ({ name, value }) => {

  const { vehicles } = useContext(AppContext)

  const getValue = id => {
    if (name === 'waiver_depreciation') {
      return vehicles[id].depreciation
    }
    if (name === 'accident_waiver') {
      return vehicles[id].accident
    }
  }

  return (
    <div className={value ? 'VehicleRow Visible' : 'VehicleRow'}>
      <ul>
        {Object.keys(vehicles).map(v =>
          <li key={v}>
            {getValue(v) ? <i className="Yes">✔︎</i> : <i className="No">x</i>}
            {vehicles[v].year}
          </li>  
        )}
      </ul>
    </div>
  )
}

export const ValueRow = ({ name, value, isCustomized, helpVisible, setHelpVisible }) => {

  const getValue = () => {
    if (value === 'No coverage') {
      return <strong>No Coverage</strong>
    }
    return <strong><i>$</i>{numeral(value).format('0,0')}</strong>
  }

  const noCov = value === 'No coverage'

  return (
    <div className={noCov ? 'Row ValueRow NoCoverage clearfix' : 'Row ValueRow clearfix'}>
      <div className="Left">
        <HelpBtn helpVisible={helpVisible} setHelpVisible={setHelpVisible} />
        <h4>{copy[name].title}</h4>
      </div>
      <div className="Right">
        <strong>{getValue()}</strong>
        <Modify
          name={name}
          value={value}
          isCustomized={isCustomized}
        />
      </div>
    </div>
  )
}

export const WaiverRow = ({ name, value, isCustomized, helpVisible, setHelpVisible }) => {

  return (
    <div className={value ? 'Row WaiverRow clearfix' : 'Row WaiverRow NoCoverage clearfix'}>
      <div className="Left">
        <HelpBtn helpVisible={helpVisible} setHelpVisible={setHelpVisible} />
        <h4>{copy[name].title}</h4>
      </div>
      <div className="Right">
        <Modify
          name={name}
          value={value}
          isCustomized={isCustomized}
        />
      </div>
    </div>
  )
}