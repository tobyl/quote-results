import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import { AppContext } from 'context'

import './style.scss'

const Modal = () => {

  const history = useHistory()

  const { modalActive, setModalActive } = useContext(AppContext)

  const [closing, setClosing] = useState(false)

  const cls = classNames('Modal', {
    'Active': modalActive,
    'Closing': closing,
  })

  const close = () => {
    setClosing(true)
    setTimeout(() => {
      setModalActive(false)
    }, 1000)
  }


  const proceed = e => {
    setClosing(true)
    setTimeout(() => {
      setModalActive(false)
      history.push('/offline-received')
    }, 1000)
  }

  const cancel = e => {
    e.preventDefault()
    close()
  }

  return (
    <div className={cls}>
      <div className="ModalBackground" />
      <div className="ModalBody">
        <h4>You haven't modified your Optional Benefits</h4>
        <button className="Button Large Rounded" onClick={cancel}>
          Modify Benefits
        </button>
        <button className="Button Large Rounded Primary" onClick={proceed}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Modal