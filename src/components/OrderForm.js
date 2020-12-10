import React from 'react';

class OrderForm extends React.Component {
  // state = {};
  // handleChange = e => {
  //   // console.log({value: e.target.value})

  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // };

  handleClick = e => {
    console.log('A form was submitted')
    const object = {
      "order": {
        "order_status": "Pending",
        "order_app": this.props.formValues.orderApp,
        "order_code": this.props.formValues.orderCode,
        "order_name": this.props.formValues.orderName,
      }
    };
  

    fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(object)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
    console.log(object);

    e.preventDefault();
  };



  render() {
    return(
      <div>
        <h1>New order</h1>

        <form >
          <div className="form-group">
            <label>Order Code</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="orderCode"
              value={this.props.formValues.orderCode}
            />
          </div>

          <div className="form-group">
            <label>Order Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="orderName"
              value={this.props.formValues.orderName}
            />
          </div>

          <div className="form-group">
            <label>Order App</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="orderApp"
              value={this.props.formValues.orderApp}
            />
          </div>

        </form>
        <button onClick={this.handleClick} className="btn btn-primary">Save</button>
      </div>
    )
  }
};

export default OrderForm;