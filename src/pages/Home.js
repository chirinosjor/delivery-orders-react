import React from 'react';

import OrdersList from '../components/OrdersList';
import '../assets/styles/Orders.css'
import Logo from '../assets/images/logo.png';

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: []
  };

  componentDidMount () {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null})

    try {
      const url = 'http://localhost:3000/orders';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      this.setState({loading: false, data: data})
    } catch (error){
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if(this.state.loading === true) {
      return 'Loading...'
    }
    return (
      <div>
        <div className="logo">
          <img src={Logo} alt=""/>
        </div>
        <div>
          <OrdersList orders={this.state.data} />
        </div>
      </div>
    )
  }
}

export default Home;