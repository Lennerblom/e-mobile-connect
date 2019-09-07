import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import './App.css';
import UserHome from './pages/user-home/user-home.component';
import AdminPage from './pages/admin-home/admin-home.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={HomePage} />
        <Route exact path = '/user-home' component={UserHome} />
        <Route exact path = '/admin-home' component={AdminPage} />
      </Switch>
     
    </div>
  );
}

export default App;
