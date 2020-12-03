import React from 'react';

class OrderForm extends React.Component {
  state = {};
  handleChange = e => {
    // console.log({value: e.target.value})

    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleClick = e => {
    console.log("click")
    console.log(this.state)
  };


  render() {
    return(
      <div>
        <h1>New order</h1>

        <form>
          <div className="form-group">
            <label>Order Code</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="orderCode"
              value={this.state.orderCode}
            />
          </div>

          <div className="form-group">
            <label>Order Name</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="orderName"
              value={this.state.orderName}
            />
          </div>

          <div className="form-group">
            <label>Order App</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="orderApp"
              value={this.state.orderApp}
            />
          </div>

        </form>
        <button onClick={this.handleClick} className="btn btn-primary">Save</button>
      </div>
    )
  }
};

export default OrderForm;