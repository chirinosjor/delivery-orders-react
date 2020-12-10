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

  // handleSubmit = e => {
  //   e.preventDefault()
  //   this.setState({ loading: true, error: null })
  //   alert('A form was submitted')

  //   try {
  //     const url = 'http://localhost:3000/orders';
  //     const data = {
  //       orderStatus:this.state.form.orderStatus, 
  //       orderCode:this.state.form.orderCode,
  //       orderName:this.state.form.orderName,
  //       orderApp:this.state.form.orderApp
  //     }
  //     fetch(url, { method: 'POST', // or ‘PUT’
  //       body: JSON.stringify(data), // data can be `string` or {object}!
  //       headers:{ 'Content-Type': 'application/json' } })
  //     this.setState({ loading: false })
  //   } catch (error) {
  //     this.setState({ loading: false, error: error })
  //   }
  // }

  

  render() {
    return (
      <div className="order-new">
        <h1>Adding a new order</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>Order Preview</h1>
              <Order 
                orderStatus={this.state.form.orderStatus || "Pending"} 
                orderCode={this.state.form.orderCode || "Code"} 
                orderName={this.state.form.orderName || "Name"} 
                orderApp={this.state.form.orderApp || "App"} 
               />
            </div>

            <div className="col-6">
              <OrderForm 
                onChange={this.handleChange}
                onClick={this.handleClick}
                formValues={this.state.form} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default OrderNew;