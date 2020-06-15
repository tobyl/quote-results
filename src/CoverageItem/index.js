import React, { useState, useContext, useRef, useEffect } from 'react'
import classNames from 'classnames'
import numeral from 'numeral'
import copy from 'copy'
import CustomizeItem from './CustomizeItem'
import { AppContext } from 'context'
// import options from 'options'

import './style.scss'

export const Item = ({ name, value, children, valueElem }) => {

  const ref = useRef()

  const { updateCoverage, isCustomized } = useContext(AppContext)

  const [dir, setDir] = useState(null)
  const [helpVisible, setHelpVisible] = useState(false)

  useEffect(() => {
    if (ref.current !== value) {
      if (Number(value) < Number(ref.current)) {
        console.log(name, 'went down')
        setDir('down')
      } else {
        console.log(name, 'went up')
        setDir('up')
      }
    }
    ref.current = value
  }, [ref, value, name])

  const cls = classNames('CoverageItem', {
    'Increased': dir === 'up',
    'Decreased': dir === 'down',
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
        {isCustomized && (
          <CustomizeItem
            name={name}
            value={value}
            updateCoverage={updateCoverage}
            isCustomized={isCustomized}
          />
        )}
      </div>
      <div className={helpVisible ? 'Row HelpCopy Active' : 'Row HelpCopy'}>
        <small>{copy[name].help}</small>
      </div>
    </div>
  )
}

export const DepreciationItem = ({ value }) => {

  const { vehicles } = useContext(AppContext)

  return (
    <Item name="waiver_depreciation">
      <div>
        {Object.keys(vehicles).map(v =>
          <div key={v}>
            {vehicles[v].depreciation ? <i>✔︎</i> : <i>x</i>}
            {vehicles[v].year}
            {vehicles[v].make}
            {vehicles[v].model}
          </div>
        )}
      </div>
    </Item>
  )
}

export const AccidentItem = ({ name, value }) => {

  const { vehicles } = useContext(AppContext)

  return (
    <Item name="accident_waiver">
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

  return (
    <Item name={name} value={value} valueElem={typeof value === 'boolean' ? value : <span><i>$</i>{numeral(value).format('0,0')}</span>}>
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
