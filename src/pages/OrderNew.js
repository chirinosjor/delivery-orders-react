import React from 'react';
import Order from '../components/Order'
import '../assets/styles/OrderNew.css';
import OrderForm from '../components/OrderForm';

class OrderNew extends React.Component {
  render() {
    return (
      <div className="order-new">
        <h1>Adding a new order</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>Order Preview</h1>
              <Order 
                orderStatus="Pending" 
                orderCode="ABC123" 
                orderName="Jorge Chirinos" 
                orderApp="Uber eats"
               />
            </div>

            <div className="col-6">
              <OrderForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default OrderNew;