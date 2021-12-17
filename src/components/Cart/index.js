import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineMinusSm} from 'react-icons/hi'
import {BsPlus} from 'react-icons/bs'
import {FaRupeeSign, FaCheckCircle} from 'react-icons/fa'
import './index.css'
import Header from '../Header'
import FooterSection from '../FooterSection'
import CartEmpty from '../CartEmpty'

class Cart extends Component {
  state = {itemsList: [], isClicked: false}

  componentDidMount() {
    this.getCartData()
  }

  getCartData = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartData'))
    // console.log(cartItems)
    if (cartItems != null) {
      const orderItem = cartItems.map(item => ({
        name: item.name,
        id: item.id,
        imageUrl: item.imageUrl,
        cost: item.cost,
        activeCount: item.activeCount,
      }))
      // console.log(orderItem)
      this.setState({itemsList: orderItem})
    } else {
      this.setState({itemsList: 0})
    }
  }

  clickPlaceOrder = () => {
    this.setState({isClicked: !this.isClicked})
    localStorage.removeItem('cartData')
  }

  renderCartData = () => {
    const {itemsList} = this.state
    const costList = itemsList.map(item => item.cost)
    // console.log(costList)
    const sum = costList.reduce((a, b) => a + b, 0)
    // console.log(sum)
    return (
      <div className="all-cart-items-container">
        <Header />
        <div className="items-cart-container">
          <div className="mobile-ordered-food-items-container">
            {itemsList.map(item => (
              <div className="ordered-each-food-item-container" key={item.id}>
                <div className="dish-image-container">
                  <img src={item.imageUrl} alt="img" className="dish-image" />
                </div>
                <div className="dish-details-container">
                  <h1 className="dish-name">{item.name}</h1>
                  <div className="dish-count-container">
                    <HiOutlineMinusSm
                      className="dish-minus-icon"
                      onClick={this.clickMinus}
                    />
                    <p className="dish-count">{item.activeCount}</p>
                    <BsPlus
                      className="dish-plus-icon"
                      onClick={this.clickPlus}
                    />
                  </div>
                  <div className="dish-cost-container">
                    <FaRupeeSign className="dish-rupees-icon" />
                    <p className="dish-cost">{`${item.cost}.00`}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="check-out-container">
              <div className="price-container">
                <h1 className="final-price-heading">Order Total:</h1>
                <div className="total-price-container">
                  <FaRupeeSign className="dish-rupees-icon" />
                  <p className="final-price">{`${sum}.00`}</p>
                </div>
              </div>
              <div className="order-placed-btn-container">
                <button
                  type="button"
                  className="order-placed-btn"
                  onClick={this.clickPlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
          <div className="desktop-cart-container">
            <div className="item-quantity-price-heading-container">
              <p className="title">Item</p>
              <p className="title">Quantity</p>
              <p className="title">Price</p>
            </div>
            <div>
              {itemsList.map(item => (
                <div className="desktop-order-container" key={item.id}>
                  <div className="desktop-ordered-item-heading-img-container">
                    <div className="desktop-ordered-item-heading-img-align">
                      <img
                        src={item.imageUrl}
                        alt="img"
                        className="desktop-ordered-item-img"
                      />
                      <h1 className="desktop-ordered-item-heading">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <div className="desktop-ordered-item-count-container">
                    <div className="desktop-ordered-item-count-align">
                      <HiOutlineMinusSm
                        className="dish-minus-icon"
                        onClick={this.clickMinus}
                      />
                      <p className="dish-count">{item.activeCount}</p>
                      <BsPlus
                        className="dish-plus-icon"
                        onClick={this.clickPlus}
                      />
                    </div>
                  </div>
                  <div className="desktop-ordered-item-price-container">
                    <div className="desktop-ordered-item-price-align">
                      <FaRupeeSign className="dish-rupees-icon" />
                      <p className="dish-cost">{`${item.cost}.00`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="check-out-container">
              <div className="price-container">
                <h1 className="final-price-heading">Order Total:</h1>
                <div className="total-price-container">
                  <FaRupeeSign className="dish-rupees-icon" />
                  <p className="final-price">{`${sum}.00`}</p>
                </div>
              </div>
              <div className="order-placed-btn-container">
                <button
                  type="button"
                  className="order-placed-btn"
                  onClick={this.clickPlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    )
  }

  renderPaymentSuccess = () => (
    <div>
      <Header />
      <div className="success-container">
        <div className="success-card">
          <FaCheckCircle className="check-circle-icon" />
          <h1 className="success-heading">Payment Successful</h1>
          <p className="success-para">
            Thank you for ordering Your payment is successfully completed.
          </p>
          <Link to="/" style={{textDecoration: 'none'}}>
            <button type="button" className="back-to-home-btn">
              Go To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  )

  render() {
    const {itemsList, isClicked} = this.state
    const size = itemsList.length
    // console.log(isClicked)
    return (
      <div>
        {isClicked ? (
          this.renderPaymentSuccess()
        ) : (
          <div>{size > 0 ? this.renderCartData() : <CartEmpty />}</div>
        )}
      </div>
    )
  }
}

export default Cart
