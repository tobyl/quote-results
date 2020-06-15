import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import BuyNow from './BuyNow'
import Coverage from 'Coverage'
import { AppContext } from 'context'

import './style.scss'

const Home = () => {

  const { buying, setBuying } = useContext(AppContext)

  return (
    <div className="Home">
      <div className="HomeWrapper">
        <div className={buying ? 'Congrats Buying text-center' : 'Congrats text-center'}>
          <h1>Congratulations!</h1>
          <p>Here's your Costco Recommended <br />insurance package</p>
        </div>
        <BuyNow buying={buying} setBuying={setBuying} />
        <div className={buying ? 'Proceed Buying text-center' : 'Proceed text-center'}>
          <h3>You can:</h3>
          <Link className="Button Continue" to="/proceed-online">Proceed Online</Link>
          <span>or</span>
          <Link className="Button Continue" to="/proceed-offline">Have us Call You</Link>
          <p>
            <button onClick={() => setBuying(false)}>Go Back and Modify Coverage</button>
          </p>
        </div>
        <div className={buying ? 'Saved Buying text-center' : 'Saved text-center'}>
          <p>You saved $34 per month by selecting the <br />home and auto discount.</p>
        </div>
      </div>
      <Coverage buying={buying} />
    </div>
  )
}

export default Home
