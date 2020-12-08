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
                  <p>{order.orderStatus}</p>
                </div>

                <div className="order-code">
                  <p>{order.orderCode}</p>
                </div>

                <div className="order-name">
                  <p>{order.orderName}</p>
                </div>

                <div className="order-app">
                  <p>{order.orderApp}</p>
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