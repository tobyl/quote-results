import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SimplePrice from 'SimplePrice'
import BuyNow from './BuyNow'
import Coverage from 'Coverage'
import { AppContext } from 'context'

import './style.scss'

const Home = () => {

  const { buying, setBuying, priceLoading } = useContext(AppContext)

  return (
    <div className="Home">
      <div className="HomeWrapper">
        <div className={buying ? 'Congrats Buying text-center' : 'Congrats text-center'}>
          <h1>Congratulations!</h1>
          <p>Here's your Costco Recommended <br />insurance package</p>
        </div>
        <BuyNow
          buying={buying}
          setBuying={setBuying}
          priceLoading={priceLoading}
        />
        <div className={buying ? 'Proceed Buying text-center' : 'Proceed text-center'}>
          <h3>You can:</h3>
          <div>
            <Link className="Button Success Continue" to="/proceed-online">
              <small>Proceed</small>
              Online
            </Link>
            <span className="Or">or</span>
            <Link className="Button Success Continue" to="/proceed-offline">
              <small>Have us</small>
              Call You
            </Link>
          </div>
          <p>
            <button className="Button Small Muted" onClick={() => setBuying(false)}>
              Go Back and Modify Coverage
            </button>
          </p>
        </div>
        <div className={buying ? 'Saved Buying text-center' : 'Saved text-center'}>
          <p>You saved $34 per month by selecting the <br />home and auto discount.</p>
        </div>
      </div>
      <Coverage buying={buying} />
      <div className="HomeFooter">
        <SimplePrice />
        <div style={{ textAlign: 'center' }}>
          <button className={buying ? 'Button BuyBtn Active' : 'Button BuyBtn'} onClick={() => setBuying(true)}>
            <span>Buy</span>
            <strong>Now</strong>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
