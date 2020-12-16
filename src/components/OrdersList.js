import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/OrderList.css'

class OrdersList extends React.Component {
  render() {
    return (
      <div className="order-list">
        {this.props.orders.map((order) => {
          return (
            <div key={order.id}>
              <Link className="text-reset text-decoration-none" to={`/orders/${order.id}/edit`}>
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
              </Link>
            </div>
          );
      })}
      </div>
    )
  }
}

export default OrdersList;