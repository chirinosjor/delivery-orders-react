import React from 'react';
import '../assets/styles/Order.css'

class Order extends React.Component {
  render() {
    return(
      <div className= {
        this.props.order_status === 
        "Pending" ? 
        'pending-order' : 
        this.props.order_status === 
        "Ready" ? 
        'ready-order' :
        this.props.order_status === 
        "Delayed" ? 
        'delayed-order' :
        'pending-order'  
      }>
        <div>
          <p className="order-status">{this.props.order_status}</p>
        </div>

        <div className="order-code">
          <p>{this.props.order_code}</p>
        </div>

        <div className="order-name">
          <p>{this.props.order_name}</p>
        </div>

        <div className="order-app">
          <p>{this.props.order_app}</p>
        </div>
      </div>
    )
  }
}

export default Order;