import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import OrderNew from '../pages/OrderNew';
import Orders from '../pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/Orders" component={Orders} />
      <Route exact path="/Orders/new" component={OrderNew} />
    </BrowserRouter>
  );
};

export default App;