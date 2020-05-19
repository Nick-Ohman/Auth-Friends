import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login  from './components/Login'
import FriendsList from './components/FriendsList'
import ProtectedRoute from './components/PrivateRoute'


function App() {
  return (
    <div className='App'>
    <Router>
      <Link to='/login'>Login</Link>
      <Link to='/friends'>Friends</Link>
      
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
      <ProtectedRoute exact path="/friends" component={FriendsList} />
    </Router>
    </div>
  );
}

export default App;
