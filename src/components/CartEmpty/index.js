import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const CartEmpty = () => (
  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625831743/cart-no-order_qivsro.png"
        alt="img"
        className="empty-cart-img"
      />
      <h1 className="empty-cart-heading">No Order Yet!</h1>
      <p className="empty-cart-description">
        we are sorry, the page you requested could not be found. Please go back
        to the homepage
      </p>
      <Link to="/" style={{textDecoration: 'none'}}>
        <button type="button" className="home-btn">
          Order now!!!!
        </button>
      </Link>
    </div>
  </>
)

export default CartEmpty
