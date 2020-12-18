import React from 'react';
import Navbar from '../components/Navbar'

import OrdersList from '../components/OrdersList';
import '../assets/styles/Orders.css'
import '../assets/styles/Order.css'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Orders extends React.Component {
  state = {
    loading: true,
    error: null,
    data: []
  };

  componentDidMount () {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 30000); //30000 ml = 30 seconds for every refresh
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null})

    try {
      const url = 'http://localhost:3000/orders';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({loading: false, data: data})
    } catch (error){
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <div>
        <Navbar />
        <h1>Current orders</h1>
        <div>
          <OrdersList orders={this.state.data} />
        </div>
      </div>
    )
  }
}

export default Orders;