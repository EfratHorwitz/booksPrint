import React from 'react';
import Login from './components/login';
import UserScreen from './components/userScreen';
import ManagerScreen from './components/managerScreen';
import NewOrder from './components/newOrder';
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Home from './components/home';

function App() {

useEffect(()=>{
  fetch("http://localhost:3000/login?user=user1")
  .then((res)=> res.json())
  .then((data)=>console.log(data))
  .catch((err)=> {console.log("error: ",err)});
},[])

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
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
