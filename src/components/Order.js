import React from 'react';
import '../assets/styles/Order.css'

class Order extends React.Component {
  render() {
    return(
      <div className="order">
        <div className="order-status">
          <p>{this.props.orderStatus}</p>
        </div>

        <div className="order-code">
          <p>{this.props.orderCode}</p>
        </div>

        <div className="order-name">
          <p>{this.props.orderName}</p>
        </div>

        <div className="order-app">
          <p>{this.props.orderApp}</p>
        </div>
      </div>
    )
  }
}

export default Order;