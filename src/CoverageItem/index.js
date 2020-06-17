import React, { useState, useContext, useRef, useEffect } from 'react'
import classNames from 'classnames'
import numeral from 'numeral'
import copy from 'copy'
import CustomizeItem from './CustomizeItem'
import { AppContext } from 'context'
// import options from 'options'

import './style.scss'

export const Item = ({ name, value, children, valueElem, isWaiver }) => {

  const ref = useRef()

  const { updateCoverage, isCustomized } = useContext(AppContext)

  const [dir, setDir] = useState(null)
  const [helpVisible, setHelpVisible] = useState(false)

  useEffect(() => {
    if (ref.current !== value) {
      if (Number(value) < Number(ref.current)) {
        setDir('down')
      } else {
        setDir('up')
      }
    }
    ref.current = value
  }, [ref, value, name])

  const cls = classNames('CoverageItem', {
    'Increased': dir === 'up',
    'Decreased': dir === 'down',
    'IsWaiver': isWaiver,
  })

  return (
    <div className={cls}>
      <div className="Row Flex">
        <button className={helpVisible ? 'Button ShowHelp Active' : 'Button ShowHelp'} onClick={() => setHelpVisible(!helpVisible)}>
          {helpVisible ? '⇡' : '?'}
        </button>
        <h4>{copy[name].title}</h4>
        {valueElem && (
          <div className="ValueElem">
            {valueElem}
          </div>
        )}
        {!isWaiver && isCustomized && (
          <CustomizeItem
            name={name}
            value={value}
            updateCoverage={updateCoverage}
            isCustomized={isCustomized}
          />
        )}
      </div>
      {isWaiver && (
        <div className="Row">
          {children}
        </div>
      )}
      <div className={helpVisible ? 'Row HelpCopy Active' : 'Row HelpCopy'}>
        <small>{copy[name].help}</small>
      </div>
    </div>
  )
}

export const DepreciationItem = ({ currentPackage }) => {

  const { vehicles } = useContext(AppContext)

  let value = false

  if (currentPackage === 'recommended' || currentPackage === 'highest') {
    value = true
  }

  return (
    <Item name="waiver_depreciation" isWaiver value={value}>
      <div>
        {Object.keys(vehicles).map(v =>
          <div key={v}>
            {vehicles[v].depreciation ? <i>✔︎</i> : <i>x</i>}
            {vehicles[v].year}
            {vehicles[v].make}
            {vehicles[v].model}
          </div>
        )}
        <CustomizeItem
          name="waiver_depreciation"
          value={value}
        />
      </div>
    </Item>
  )
}

export const AccidentItem = ({ currentPackage }) => {

  const { vehicles } = useContext(AppContext)

  let value = false

  if (currentPackage === 'recommended' || currentPackage === 'highest') {
    value = true
  }

  return (
    <Item name="accident_waiver" isWaiver value={value}>
      <div>
        {Object.keys(vehicles).map(v =>
          <div key={v}>
            {vehicles[v].accident ? <i>✔︎</i> : <i>x</i>}
            {vehicles[v].year}
            {vehicles[v].make}
            {vehicles[v].model}
          </div>
        )}
      </div>
    </Item>
  )
}

export const CoverageItem = ({ name, value }) => {

  const { updateCoverage, isCustomized } = useContext(AppContext)

  const elem = () => {
    if (value === 'No coverage') {
      return (
        <span>No Coverage</span>
      )
    }
    return <span><i>$</i>{numeral(value).format('0,0')}</span>
  }

  return (
    <Item name={name} value={value} valueElem={elem()}>
      {isCustomized && (
        <CustomizeItem
          name={name}
          value={value}
          updateCoverage={updateCoverage}
          isCustomized={isCustomized}
        />
      )}
    </Item>
  )
}
