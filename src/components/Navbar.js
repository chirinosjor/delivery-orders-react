import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="container navbar">
        <Link to="/" target="_blank" className="btn btn-primary">Go to Home Page</Link>
        <Link to="/orders" className="btn btn-primary">View Current orders</Link>
        <Link to="/orders/new" className="btn btn-primary">Create a new order</Link>
      </div>)
  }
}

export default Navbar;