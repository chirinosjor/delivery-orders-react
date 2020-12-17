import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
import navbarlogo from '../assets/images/navbarlogo.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/orders">
            <img src={navbarlogo} alt="App logo"/>
          </Link>
        </div>
        <div>
          <Link to="/" target="_blank" className="btn btn-dark mr-5 hvr-float-shadow">Go to Home Page</Link>
          <Link to="/orders" className="btn btn-dark hvr-float-shadow">View Current orders</Link>
          <Link to="/orders/new" className="btn btn-dark ml-5 hvr-float-shadow">Create a new order</Link>
        </div>
        <div className="socialmedia-icons">
          <a href="https://www.facebook.com/ChirinosJor" target="blank">
            <FontAwesomeIcon icon={faFacebook} size="3x" className="hvr-grow"/>
          </a>

          <a href="https://twitter.com/ChirinosJor" target="blank">
          <FontAwesomeIcon icon={faTwitter} size="3x" className="hvr-grow"/>
          </a>

          <a href="https://www.instagram.com/chirinosjor" target="blank">
          <FontAwesomeIcon icon={faInstagram} size="3x" className="hvr-grow"/>
          </a>
        </div>
      </div>)
  }
}

export default Navbar;