import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext, FormContext } from 'context'

import './style.scss'

const Form = ({ children, handleSubmit, oabButtons }) => {

  const history = useHistory()

  const [data, setData] = useState({})
  const { setModalActive } = useContext(AppContext)

  const onSubmit = e => {
    e.preventDefault()
    console.log('submit!')
    handleSubmit && handleSubmit(data)
  }

  // console.log(data['income_replacement'], data['medical'])

  const handleContinue = e => {
    e.preventDefault()
    const anyChanged = Object.keys(data).filter(x =>
      data[x] !== 'no' && data[x] !== 'no_increase'
    )
    if (anyChanged.length < 1) {
      setModalActive(true)
    } else {
      history.push('/complete')
    }
  }

  return (
    <FormContext.Provider value={{ data, setData }}>
      <form onSubmit={onSubmit}>
        {children}
        {oabButtons && (
          <div>
            <button onClick={e => handleContinue(e)}>
              Continue
            </button>
          </div>
        )}
      </form>
    </FormContext.Provider>
  )
}

export default Form