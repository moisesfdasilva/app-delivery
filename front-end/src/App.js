import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserProvider from './store/provider/UserProvider';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import CustomerOrder from './pages/customerOrder';
import CustomerOrderDetail from './pages/customerOrderDetails';

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
      </Switch>
    </UserProvider>
  );
}

export default App;
