import React, { useContext, useEffect } from 'react'
import classNames from 'classnames'
import { FormContext } from 'context'

const RadioGroup = ({ name, helpCopy, DefaultValue, choices }) => {

  const { data, setData } = useContext(FormContext)

  const cls = classNames('field RadioGroup', {
    'Single': choices.length === 1,
    'Double': choices.length === 2,
    'Triple': choices.length === 3,
    'Quadruple': choices.length === 4,
  })

  const handleChange = e => {
    const inputValue = e.target.value
    setData(prevState => {
      let next = Object.assign({}, prevState)
      next[name] = inputValue    
      return next  
    })
  }

  useEffect(() => {
    handleChange({ target: { value: DefaultValue } })
  }, []) // eslint-disable-line
 
  const isLast = ch => {
    const index = choices.indexOf(ch)
    if (index + 1 === choices.length) {
      return 'LastLabel'
    }
    return ''
  }

  // if (name === 'caregiver') {
  //   console.log(name, data[name])
  // }

  return (
    <div className={cls}>
      {choices.map(ch =>
        <label htmlFor={`${ch[0]}-${name}`} key={ch[0]} className={(ch[0] === 'no_increase' || ch[0] === 'no') ? 'FirstLabel' : isLast(ch)}>
          <input
            id={`${ch[0]}-${name}`}
            type="radio"
            name={name}
            value={ch[0]}
            checked={ch[0] === data[name]}
            onChange={handleChange}
          /> <span>{ch[1]}</span>
        </label>
      )}
      <small>
        {helpCopy}
      </small>
    </div>
  )
}

export default RadioGroup