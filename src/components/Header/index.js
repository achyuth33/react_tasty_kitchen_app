import {Component} from 'react'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import {FaBars, FaTimesCircle} from 'react-icons/fa'

import './index.css'

class Header extends Component {
  state = {isClicked: false}

  onClickLogout = () => {
    Cookies.remove('jwt_token')
  }

  renderIconContainer = () => (
    <Link to="/" className="nav-bar-icon-link" style={{textDecoration: 'none'}}>
      <div className="nav-bar-icon-container">
        <img
          src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625742512/Frame_274_zlrzwk.svg"
          alt="nav-Icon"
          className="nav-bar-icon-img"
        />
        <h1 className="nav-bar-icon-heading">Tasty Kitchen</h1>
      </div>
    </Link>
  )

  renderNavList = () => (
    <ul className="list-container">
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/cart" className="nav-link">
        <li>Cart</li>
      </Link>
    </ul>
  )

  render() {
    const {isClicked} = this.state
    return (
      <>
        <nav className="nav-bar">
          <div className="desktop-nav-bar-container">
            {this.renderIconContainer()}
            <div className="nav-bar-link-items-container">
              {this.renderNavList()}
              <Link to="/login" style={{textDecoration: 'none'}}>
                <button
                  className="desktop-logout-btn"
                  type="button"
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
          <div className="mobile-nav-bar-container">
            {this.renderIconContainer()}
            <button
              type="button"
              className="menu-btn"
              onClick={() => {
                this.setState({isClicked: !isClicked})
              }}
            >
              <FaBars className="FaBars " />
            </button>
          </div>
        </nav>
        {isClicked && (
          <div className="mobile-menu-list">
            {this.renderNavList()}
            <Link to="/login" className="nav-link-button">
              <button
                className="mobile-logout-btn"
                type="button"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </Link>
            <FaTimesCircle
              className="mobile-toggle-icon"
              onClick={() => {
                this.setState({isClicked: !isClicked})
              }}
            />
          </div>
        )}
      </>
    )
  }
}

export default Header
