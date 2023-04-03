import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserProvider from './store/provider/UserProvider';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import CustomerProducts from './pages/customerProducts';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/orders" component={ CustomerProducts } />
        <Route path="/customer/orders/:id" component={ CustomerProducts } />
      </Switch>
    </UserProvider>
  );
}

export default App;
