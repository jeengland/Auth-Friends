import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';

import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <PrivateRoute exact path='/friend_list' component={FriendList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
