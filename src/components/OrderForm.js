import React from 'react';
import '../assets/styles/OrderForm.css'

class OrderForm extends React.Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.onSubmit} className="order-form">
          <div className="form-group">
            <label>Order Status</label>
            <select 
            onChange={this.props.onChange} 
            className="form-control"
            name="order_status"
            value={this.props.formValues.order_status}
            required
            >
              <option value="" disabled hidden>Choose a status</option>
              <option value="Pending">Pending</option>
              <option value="Ready">Ready</option>
              <option value="Delayed">Delayed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Order Code</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="order_code"
              value={this.props.formValues.order_code}
              required
            />
          </div>

          <div className="form-group">
            <label>Order Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="order_name"
              value={this.props.formValues.order_name}
              required
            />
          </div>

          <div className="form-group">
            <label>Order App</label>
            <select 
            onChange={this.props.onChange} 
            className="form-control" 
            name="order_app"
            value={this.props.formValues.order_app}
            required
            >
              <option value="" disabled hidden>Choose an App</option>
              <option value="Uber Eats">Uber Eats</option>
              <option value="Rappi">Rappi</option>
              <option value="Pedidos Ya!">Pedidos Ya!</option>
            </select>
          </div>
          <button className="btn btn-primary">
              Save order
          </button>
        </form>
      </div>
    )
  }
};

export default OrderForm;