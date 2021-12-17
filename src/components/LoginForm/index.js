import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-element"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-element"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div className="sign-in-container">
        <div className="desktop-sign-in-card-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="mobile-signIn-container">
              <h1 className="signIn-heading">Sign In</h1>
              <div className="mobile-signIn-image-container">
                <img
                  src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625810735/mobile-login_1_ragewe.png"
                  alt="signIn-img"
                  className="mobile-signIn-image"
                />
              </div>
            </div>
            <div className="desktop-signIn-container">
              <div className="desktop-sigIn-icon-container">
                <img
                  src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625742512/Frame_274_zlrzwk.svg"
                  alt="icon"
                />
                <img
                  src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625742726/Features_sy5c0d.svg"
                  alt="icon-text"
                />
                <h1 className="signIn-heading">Sign In</h1>
              </div>
            </div>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="signIn-button">
              Sign in
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
        <div className="desktop-signIn-image-container">
          <img
            src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625809830/login-image_duk4fw.png"
            alt="img"
            className="desktop-signIn-image"
          />
        </div>
      </div>
    )
  }
}

export default LoginForm
