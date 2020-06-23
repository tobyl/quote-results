import React from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'forms/Form'
import Text from 'forms/Text'

const ProceedForm = ({ submitUrl }) => {

  const history = useHistory()

  const handleSubmit = () => {
    console.log('submit ', submitUrl)
    history.push(submitUrl)
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit}>
        <Text
          name="first_name"
          label="First name"
          halfLeft
        />
        <Text
          name="last_name"
          label="Last name"
          halfRight
        />
        <Text
          name="email_address"
          label="Email address"
        />
        <Text
          name="phone_number"
          label="Phone number"
        />
        <input className="Button Small Pill Primary" type="submit" value="Continue" />
      </Form>
    </div>
  )
}

export default ProceedForm