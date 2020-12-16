import React from 'react';
import Order from '../components/Order'
import '../assets/styles/OrderEdit.css';
import OrderForm from '../components/OrderForm';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

class OrderEdit extends React.Component {
  state = { 
    loading: true,
    error: null,
    form: {
    order_code: '',
    order_app: '',
    order_name: '',
  } };

  componentDidMount () {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null})

    try {
      const id = this.props.match.params.orderId
      const url = `http://localhost:3000/orders/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({loading: false, form: data})
    } catch (error){
      this.setState({loading: false, error: error})
    }
  }


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
    const object = {
      "order": {
        "order_status": this.state.form.order_status,
        "order_app": this.state.form.order_app,
        "order_code": this.state.form.order_code,
        "order_name": this.state.form.order_name,
      }
    };
  
    const id = this.props.match.params.orderId
    const url = `http://localhost:3000/orders/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(object)
      }).then(alert('Order modified'));
  };

  handleRemove = e => {
    const id = this.props.match.params.orderId
    const url = `http://localhost:3000/orders/`;
    fetch(url + id, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
    .then(alert('Order deleted'))
  }

  render() {
    return (
      <div className="order-edit">
        <h1>Edit an order</h1>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>Order Preview</h1>
              <Order 
                order_status={this.state.form.order_status} 
                order_code={this.state.form.order_code} 
                order_name={this.state.form.order_name} 
                order_app={this.state.form.order_app} 
               />
            </div>

            <div className="col-6">
              <h1>Edit order</h1>
              <OrderForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
              <Link onClick={this.handleRemove} to="/orders/" className="btn btn-danger">Delete order</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default OrderEdit;
