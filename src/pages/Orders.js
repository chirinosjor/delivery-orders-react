import React from 'react';
import { Link } from 'react-router-dom';

import OrdersList from '../components/OrdersList';
import '../assets/styles/Orders.css'

class Orders extends React.Component {
  state = {
    data: [
      {
        "orderId": "1",
        "orderStatus": "Pending", 
        "orderCode": "ABC123",
        "orderName": "Pepito Perez",
        "orderApp": "Rappi"
      },
      {
        "orderId": "2",
        "orderStatus": "Pending", 
        "orderCode": "CBA654",
        "orderName": "Sharon Soto",
        "orderApp": "Pedidos Ya"
      },
      {
        "orderId": "3",
        "orderStatus": "Pending", 
        "orderCode": "RFV321",
        "orderName": "Juan Rivas",
        "orderApp": "Uber Eats"
      },
      {
        "orderId": "2",
        "orderStatus": "Pending", 
        "orderCode": "CBA654",
        "orderName": "Sharon Soto",
        "orderApp": "Pedidos Ya"
      },
      {
        "orderId": "2",
        "orderStatus": "Pending", 
        "orderCode": "CBA654",
        "orderName": "Sharon Soto",
        "orderApp": "Pedidos Ya"
      },
      {
        "orderId": "2",
        "orderStatus": "Pending", 
        "orderCode": "CBA654",
        "orderName": "Sharon Soto",
        "orderApp": "Pedidos Ya"
      },
      {
        "orderId": "2",
        "orderStatus": "Pending", 
        "orderCode": "CBA654",
        "orderName": "Sharon Soto",
        "orderApp": "Pedidos Ya"
      },
      {
        "orderId": "2",
        "orderStatus": "Pending", 
        "orderCode": "CBA654",
        "orderName": "Sharon Soto",
        "orderApp": "Pedidos Ya"
      },
      {
        "orderId": "2",
        "orderStatus": "Pending", 
        "orderCode": "CBA654",
        "orderName": "Sharon Soto",
        "orderApp": "Pedidos Ya"
      },
      {
        "orderId": "2",
        "orderStatus": "Pending", 
        "orderCode": "CBA654",
        "orderName": "Sharon Soto",
        "orderApp": "Pedidos Ya"
      },   
    ]
  }

  render() {
    return (
      <div>
        <h1>Current orders</h1>
        <div className="container">
          <Link to="/Orders/new" className="btn btn-primary">
            Add new order
          </Link>
        </div>

        <div>
          <OrdersList orders={this.state.data} />
        </div>
      </div>
    )
  }
}

export default Orders;