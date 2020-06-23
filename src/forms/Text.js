import React, { useContext } from 'react'
import classNames from 'classnames'
import { FormContext } from 'context'

const Text = ({ name, label, halfLeft, halfRight }) => {

  const { data, setData } = useContext(FormContext)

  const handleChange = e => {
    const { value } = e.target
    setData(prevState => {
      let next = Object.assign({}, prevState)
      next[name] = value
      return next
    })
  }

  const cls = classNames('field Text', {
    'Half': halfLeft || halfRight,
    'Right': halfRight,
    'Left': halfLeft,
  })

  return (
    <div className={cls}>
      <label>{label}</label>
      <input
        name={name}
        value={data[name] || ''}
        type="text"
        onChange={handleChange}
      />
    </div>
  )
}

export default Text