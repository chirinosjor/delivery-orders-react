import React from 'react';
import Order from '../components/Order'
import '../assets/styles/OrderNew.css';
import OrderForm from '../components/OrderForm';
import Navbar from '../components/Navbar';

class OrderNew extends React.Component {
  state = { 
    form: {
    order_code: '',
    order_app: '',
    order_name: '',
    order_status: '',
    } 
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }

    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form)
    const object = {
      "order": {
        "order_status": this.state.form.order_status,
        "order_app": this.state.form.order_app,
        "order_code": this.state.form.order_code,
        "order_name": this.state.form.order_name,
      }
    };
    console.log(object);

    fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(object)
      }).then(alert('Order created'))
      .then(this.props.history.push('/orders'));
  };

  render() {
    return (
      <div className="order-new">
        <Navbar />        
        <h1>Adding a new order</h1>
        <div className="container">
          <div className="row content">
            <div className="col-6">
              <h1>New order</h1>
              <OrderForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form} 
              />
            </div>
            <div className="col-6">
              <h1>Order Preview</h1>
              <div className="order-preview">
                <Order
                  order_status={this.state.form.order_status || "Pending"} 
                  order_code={this.state.form.order_code || "Code"} 
                  order_name={this.state.form.order_name || "Name"} 
                  order_app={this.state.form.order_app || "App"} 
                />
               </div>
            </div>            
          </div>
        </div>
      </div>
    )
  }
};

export default OrderNew;