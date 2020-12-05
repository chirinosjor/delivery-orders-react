import React from 'react';
import Order from '../components/Order'
import '../assets/styles/OrderNew.css';
import OrderForm from '../components/OrderForm';

class OrderNew extends React.Component {
  state = { form: {
    orderCode: '',
    orderApp: '',
    orderName: '',
  } };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

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
                orderCode={this.state.form.orderCode} 
                orderName={this.state.form.orderName} 
                orderApp={this.state.form.orderApp} 
               />
            </div>

            <div className="col-6">
              <OrderForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default OrderNew;