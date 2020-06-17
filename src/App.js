import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from 'Header'
import Home from 'Home'
import Online from 'Online'
import Offline from 'Offline'
import OptionalBenefits from 'OptionalBenefits'
import { AppContext } from 'context'
import covs from 'covs'

const vehicles = {
  1: {
    year: '2007',
    make: 'Honda',
    model: 'Fit LX',
    depreciation: false,
    accident: true,
  },
  2: {
    year: '2020',
    make: 'Ford',
    model: 'Edge',
    depreciation: true,
    accident: true,
  },
}

const App = () => {

  const [loading, setLoading] = useState(true)
  const [customize, setCustomize] = useState(false)
  const [isCustomized, setIsCustomized] = useState(false)
  const [coverages, setCoverages] = useState(null)
  const [currentPackage, setCurrentPackage] = useState('recommended')
  const [delta, setDelta] = useState(null)
  const [buying, setBuying] = useState(false)

  const updateCoverage = (name, value) => {
    setCoverages(prevState => {
      let next = Object.assign({}, prevState)
      next[currentPackage][name] = value
      localStorage.setItem('coverages', JSON.stringify(next))
      return next
    })
  }

  const changePackage = pack => {
    if (pack !== currentPackage) {
      setCurrentPackage(prevState => {
        if (prevState === 'good') {
          setDelta('up')
        } else if (prevState === 'highest') {
          setDelta('down')
        } else if (prevState === 'recommended') {
          if (pack === 'good') {
            setDelta('down')
          } else {
            setDelta('up')
          }
        }
        return pack
      })
    }
  }

  const cancelCustomize = () => {
    localStorage.removeItem('coverages')
    setCustomize(false)
    setIsCustomized(false)
    if (currentPackage === 'good') {
      updateCoverage('waiver_depreciation', false)
      updateCoverage('accident_waiver', false)
    } else {
      updateCoverage('waiver_depreciation', true)
      updateCoverage('accident_waiver', true)
    }
  }

  const state = {
    vehicles,
    loading, setLoading,
    buying, setBuying,
    currentPackage, setCurrentPackage,
    changePackage,
    coverages, updateCoverage,
    customize, setCustomize,
    isCustomized, setIsCustomized,
    cancelCustomize,
    delta, setDelta,
  }

  useEffect(() => {
    const ls = localStorage.getItem('coverages')
    if (ls) {
      setCoverages(JSON.parse(ls))
      setIsCustomized(true)
    } else {
      setCoverages(covs)
    }
    setLoading(false)
  }, [])

  return (
    <div className="App container">
      <AppContext.Provider value={state}>
        <Header />
        <Switch>
          <Route exact path="/">
            {loading ?
              <div>Loading...</div> :
              <Home />
            }
          </Route>
          <Route path="/proceed-online">
            <Online />
          </Route>
          <Route path="/proceed-offline">
            <Offline />
          </Route>
          <Route path="/optional-benefits">
            <OptionalBenefits />
          </Route>
          <Route path="/complete">
            you've made a great choice
          </Route>
        </Switch>
      </AppContext.Provider>
    </div>
  )
}

export default App
