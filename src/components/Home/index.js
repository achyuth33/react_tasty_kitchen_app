import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {Carousel} from 'react-bootstrap'

import AllRestaurant from '../AllRestaurant'
import Header from '../Header'
import FooterSection from '../FooterSection'

import './index.css'

class Home extends Component {
  state = {offersList: [], isLoading: false}

  componentDidMount() {
    this.getOffersList()
  }

  getOffersList = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      // console.log(fetchedData)
      const updatedData = fetchedData.offers.map(offer => ({
        imageUrl: offer.image_url,
        id: offer.id,
      }))
      this.setState({
        offersList: updatedData,
        isLoading: false,
      })
    }
  }

  renderOffersList = () => {
    const {offersList} = this.state
    // console.log(offersList)
    return (
      <Carousel>
        {offersList.map(offer => (
          <Carousel.Item key={offer.id}>
            <img className="carousel-img" src={offer.imageUrl} alt="img" />
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Oval" color="gold" height="40" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <Header />
        {isLoading ? (
          this.renderLoader()
        ) : (
          <div>
            <div className="home-offers-image">{this.renderOffersList()}</div>
            <AllRestaurant />
          </div>
        )}
        <FooterSection />
      </div>
    )
  }
}

export default Home
