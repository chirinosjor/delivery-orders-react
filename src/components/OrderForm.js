import React from 'react';
import { Link } from "react-router-dom";

class OrderForm extends React.Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Order Code</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="order_code"
              value={this.props.formValues.order_code}
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
            />
          </div>

          <div className="form-group">
            <label>Order App</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="order_app"
              value={this.props.formValues.order_app}
            />
          </div>
          <button className="btn btn-primary">
              Save
          </button>
        </form>
      </div>
    )
  }
};

export default OrderForm;