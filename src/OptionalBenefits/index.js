import React, { useState, useContext } from 'react'
// import { Link } from 'react-router-dom'
import Form from 'forms/Form'
import RadioGroup from 'forms/RadioGroup'
import SimplePrice from 'SimplePrice'
import Modal from 'Modal'
import {
  incomeReplacement, medicalCatastrophic,
  medical, caregiver, funeral,
} from 'vars'
import { AppContext } from 'context'

import './style.scss'

const Btn = ({ onClick }) => {
  return (
    <button className="HelpBtn" onClick={onClick}>
      ?
    </button>
  )
}

const OptionalBenefits = () => {

  const [current, setCurrent] = useState('')

  const { modalActive } = useContext(AppContext)

  const set = (e, item)  => {
    e.preventDefault()
    if (current === item) {
      setCurrent('')
    } else {
      setCurrent(item)
    }
  }

  return (
    <div className="OABs">
      <SimplePrice />
      <Form oabButtons>
        <h4>
          <Btn onClick={e => set(e, 'income_replacement')} />
          Income Replacement
        </h4>
        <p>Income Replacement replaces up to 70% of your gross income if you cannot work due to an auto accident.</p>
        <div className={current === 'income_replacement' ? 'HelpCopy Active' : 'HelpCopy'}>
          <div>
            <small>
              Standard coverage on your auto policy is up to $400 a week. Please select an increased optional amount in the drop down if required.
            </small>
          </div>
        </div>
        <RadioGroup
          name="income_replacement"
          choices={incomeReplacement}
          DefaultValue="no_increase"
        />
        <h4>
          <Btn onClick={e => set(e, 'medical')} />
          Medical, Rehabilitation and Attendant Care (Non-Catastrophic Injury)
        </h4>
        <p>Reimbursement for medical and rehabilitation costs that are not covered by OHIP.</p>
        <div className={current === 'medical' ? 'HelpCopy Active' : 'HelpCopy'}>
          <small>
            Attendant care is reimbursement for an attendant to care for you if you are unable. Standard coverage provides up to $1,000,000 for catastrophic injuries. Please select an increased optional amount if required.
          </small>
        </div>
        <RadioGroup
          name="medical"
          choices={medical}
          DefaultValue="no_increase"
        />
        <h4>
          <Btn onClick={e => set(e, 'medical_catastrophic')} />
          Medical, Rehabilitation and Attendant Care (Catastrophic Injury)
        </h4>
        <p>Reimbursement for medical and rehabilitation costs that are not covered by OHIP.</p>
        <div className={current === 'medical_catastrophic' ? 'HelpCopy Active' : 'HelpCopy'}>
          <small>
            Attendant care is reimbursement for an attendant to care for you if you are unable. Standard coverage provides up to $1,000,000 for catastrophic injuries. Please select an increased optional amount if required.
          </small>
        </div>
        <RadioGroup
          name="medical_catastrophic"
          choices={medicalCatastrophic}
          DefaultValue="no_increase"
        />
        <h4>
          <Btn onClick={e => set(e, 'caregiver')} />
          Caregiver Benefit & Housekeeping and Home Maintenance expenses
        </h4>
        <p>Reimbursement to hire someone to care for your dependents or take care of your household if you are injured in an auto accident.</p>
        <div className={current === 'caregiver' ? 'HelpCopy Active' : 'HelpCopy'}>
          <small>
            Standard coverage is for catastrophic injuries and includes up to $250/week for your first dependent, $50/week for additional dependents, and up to $100 week for housekeeping. If you would like coverage for non-catastrophic injuries, please select "All Injuries".
          </small>
        </div>
        <RadioGroup
          name="caregiver"
          choices={caregiver}
          DefaultValue="no_increase"
        />
        <h4>
          <Btn onClick={e => set(e, 'funeral')} />
          Death & funeral
        </h4>
        <p>A lump sum payout to your family if you pass away in an auto accident, and a second payout to help cover cost of funeral expenses.</p>
        <div className={current === 'funeral' ? 'HelpCopy Active' : 'HelpCopy'}>
          <small>
            Standard coverage includes a $25,000 lump sum for a spouse, $10,000 for each dependent, and up to $6,000 for funeral expenses. If you would like to increase this coverage to $50,000 for spouse, $20,000 for each dependent, and up to $8,000 funeral, please select "Increased Benefits".
          </small>
        </div>
        <RadioGroup
          name="funeral"
          choices={funeral}
          DefaultValue="no_increase"
        />
        <h4>
          <Btn onClick={e => set(e, 'dependent')} />
          Dependent Caregiver
        </h4>
        <p>Reimbursement for additional expenses to care for your dependents if you’re employed and injured in an auto accident.</p>
        <div className={current === 'dependent' ? 'HelpCopy Active' : 'HelpCopy'}>
          <small>
            Dependent Care is not included in Standard Coverage. If you chose to purchase this coverage, it includes up to $75 per week for your first dependent and $25 per week for additional dependents to a max of $150 a week.
          </small>
        </div>
        <RadioGroup
          name="dependent"
          choices={[['no', 'No Increase'], ['yes', 'Increased benefits']]}
          DefaultValue="no"
        />
        <h4>Indexation Benefit</h4>
        <p>Adjusts increased optional benefits for changes in inflation.</p>
        <RadioGroup
          name="indexation"
          choices={[['no', 'No Increase'], ['yes', 'Increased benefits']]}
          DefaultValue="no"
        />
      </Form>
      {/* <input type="submit" className="Button Small Pill Primary" value="Continue" /> */}
      {modalActive && <Modal />}
    </div>
  )
}

export default OptionalBenefits