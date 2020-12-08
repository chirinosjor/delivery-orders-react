import React from 'react';

import '../assets/styles/OrderList.css'

class OrdersList extends React.Component {
  render() {
    if(this.props.orders.length === 0) {
      return (
        <div>
          <h3>Orders not found</h3>
        </div>
      )
    }
    return (
      <div className="order-list">
        {this.props.orders.map((order) => {
          return (
            <div key={order.orderId}>
              <div className="order">
                <div className="order-status">
                  <p>{order.order_status}</p>
                </div>

                <div className="order-code">
                  <p>{order.order_code}</p>
                </div>

                <div className="order-name">
                  <p>{order.order_name}</p>
                </div>

                <div className="order-app">
                  <p>{order.order_app}</p>
                </div>
              </div>
            </div>
          );
      })}
      </div>
    )
  }
}

export default OrdersList;