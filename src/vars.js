import React from 'react'

export const incomeReplacement = [
  ['no_increase', <span>No<br />Increase</span>],
  ['600', <span>$600<br /><small>weekly</small></span>],
  ['800', <span>$800<br /><small>weekly</small></span>],
  ['1000', <span>$1,000<br /><small>weekly</small></span>],
]

export const medical = [
  ['no_increase', <span>No<br />Increase</span>],
  ['130000', <span>$130,000<br /><small>additional coverage</small></span>],
  ['1000000', <span>$1,000,000<br /><small>additional coverage</small></span>],
]

export const medicalCatastrophic = [
  ['no_increase', <span>No<br />Increase</span>],
  ['2000000', <span>$2,000,000<br /><small>additional coverage</small></span>],
]

export const caregiver = [
  ['no_increase', <span>No<br />Increase</span>],
  ['all_injuries', <span><small>additional coverage for</small>All injuries</span>],
]

export const funeral = [
  ['no_increase', <span>No<br />Increase</span>],
  ['increased', <span><small>Increased benefits for</small>Death & Funerals</span>],
]

export const coverage = [
  {
    id: 1,
    name: 'standard_coverage',
    title: <span>Standard<br />Accident Benefits</span>,
    help: 'Some help copy for Damage to Non-owned Autos',
  },
  {
    id: 2,
    name: 'damage_non_owned',
    title: <span>Damage to<br />Non-owned Autos</span>,
    help: 'Some help copy for Damage to Non-owned Autos',
  },
  {
    id: 3,
    name: 'waiver_depreciation',
    title: <span>Waiver of<br />Depreciation</span>,
    help: 'Some help copy for Waiver of Depreciation',
  },
  {
    id: 4,
    name: 'accident_waiver',
    title: <span>Accident<br />Waiver</span>,
    help: 'Some help copy for Accident Waiver',
  },
  {
    id: 5,
    name: 'transportation_replacement',
    title: <span>Transportation<br />Replacement</span>,
    help: 'Some help copy for Deductible (Collision)',
  },
  {
    id: 6,
    name: 'restriction_glass',
    title: <span>Restriction of<br />Glass Coverage</span>,
    help: 'Some help copy for Restriction of glass coverage',
  },
]

