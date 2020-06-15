import React from 'react'
import options from 'options'

const CustomizeItem = ({ name, value, updateCoverage }) => {

  const currentValueIndex = () => {
    if (options[name]) {
      return options[name].indexOf(value)
    }
    return 0
  }

  const decrease = () => {
    if (currentValueIndex() > 0) {
      updateCoverage(name, options[name][currentValueIndex() - 1])
    }
  }

  const increase = () => {
    if (currentValueIndex() + 1 < options[name].length) {
      updateCoverage(name, options[name][currentValueIndex() + 1])
    }
  }

  const decreaseDisabled = () => {
    return currentValueIndex() < 1
  }

  const increaseDisabled = () => {
    return currentValueIndex() + 1 >= options[name].length
  }

  return (
    <div className="CustomizeHolder inline-block">
      <button className={decreaseDisabled() ? 'Button Decrease Disabled' : 'Button Decrease'} onClick={decrease}>-</button>
      <span className="Divider" />
      <button className={increaseDisabled() ? 'Button Increase Disabled' : 'Button Increase'} onClick={increase}>+</button>
    </div>
  )
}

export default CustomizeItem