import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login  from './components/Login'


function App() {
  return (
    <div className='App'>
    <Router>
      <Link to='/login'>Login</Link>
      <Link to='/friends'>Friends</Link>
      
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
     
    </Router>
    </div>
  );
}

export default App;
