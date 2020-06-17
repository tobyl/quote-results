import React from 'react'

const HelpBtn = ({ helpVisible, setHelpVisible }) => {
  return (
    <button className="Button" onClick={() => setHelpVisible(!helpVisible)}>
      ?
    </button>
  )
}

export default HelpBtn