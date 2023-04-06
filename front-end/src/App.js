import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserProvider from './store/provider/UserProvider';
import ProductProvider from './store/provider/ProductProvider';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Products from './pages/products';
import CustomerOrder from './pages/customerOrder';
import CustomerOrderDetail from './pages/customerOrderDetails';
import SellerOrder from './pages/sellerOrder';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route exact path="/customer/orders" component={ CustomerOrder } />
        <Route path="/customer/orders/:id" component={ CustomerOrderDetail } />
        <Route path="/seller/orders" component={ SellerOrder } />
        <ProductProvider>
          <Route path="/customer/products" component={ Products } />
          <Route path="/customer/checkout" />
        </ProductProvider>
      </Switch>
    </UserProvider>
  );
}

export default App;
