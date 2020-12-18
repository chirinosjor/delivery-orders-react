import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home';
import Orders from '../pages/Orders';
import OrderNew from '../pages/OrderNew';
import OrderEdit from '../pages/OrderEdit';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/orders/new" component={OrderNew} />
      <Route exact path="/orders/:orderId/edit" component={OrderEdit} />
    </BrowserRouter>
  );
};

export default App;