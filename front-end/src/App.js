import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserProvider from './store/provider/UserProvider';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
      </Switch>
    </UserProvider>
  );
}

export default App;
