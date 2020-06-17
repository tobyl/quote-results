import React, { useContext } from 'react'
import options from 'options'
import { AppContext } from 'context'

const Modify = ({ name, value, isCustomized }) => {

  const { updateCoverage } = useContext(AppContext)

  const currentValueIndex = () => {
    if (options[name]) {
      return options[name].indexOf(value)
    }
    return 0
  }

  const decrease = () => {
    if (typeof value === 'boolean') {
      updateCoverage(name, false)
    } else if (currentValueIndex() > 0) {
      updateCoverage(name, options[name][currentValueIndex() - 1])
    }
  }

  const increase = () => {
    if (typeof value === 'boolean') {
      updateCoverage(name, true)
    } else if (currentValueIndex() + 1 < options[name].length) {
      updateCoverage(name, options[name][currentValueIndex() + 1])
    }
  }

  const decreaseDisabled = () => {
    if (typeof value === 'boolean') {
      return !value
    }
    return currentValueIndex() < 1
  }

  const increaseDisabled = () => {
    if (typeof value === 'boolean') {
      return value
    }
    return currentValueIndex() + 1 >= options[name].length
  }

  return (
    <span className={isCustomized ? 'Modify Visible' : 'Modify'}>
      <button className={decreaseDisabled() ? 'Button Decrease Disabled' : 'Button Decrease'} onClick={decrease}>
        -
      </button>
      <button className={increaseDisabled() ? 'Button Increase Disabled' : 'Button Increase'} onClick={increase}>
        +
      </button>
    </span>
  )
}

export default Modify