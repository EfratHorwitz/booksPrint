import React from 'react';
import Login from './components/login';
import UserScreen from './components/userScreen';
import ManagerScreen from './components/managerScreen';
import NewOrder from './components/newOrder';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/userScreen">
            <UserScreen />
          </Route>
          <Route path="/managerScreen">
            <ManagerScreen />
          </Route>
          <Route path="/newOrder">
            <NewOrder />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
