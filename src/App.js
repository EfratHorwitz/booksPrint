import React from 'react';
import Home from './components/home';
import UserScreenHard from './components/userScreenHard';
import UserScreenSoft from './components/userScreenSoft';
import CompleteOrder from './components/completeOrder';
import Registration from './components/registration';
import ManagerScreen from './components/managerScreen';
import OrderDetails from './components/orderDetails';
import PrintOptions from './components/printOptions';
import Trial from './components/trial'

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"


function App() {

  useEffect(() => {
    fetch("http://localhost:3000/login?user=user1")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => { console.log("error: ", err) });
  }, [])

  return (
//     <div>
// <Trial/>
//     </div>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/managerScreen">
            <ManagerScreen />
          </Route>
          <Route path="/userScreenHard">
            <UserScreenHard />
          </Route>
          <Route path="/userScreenSoft">
            <UserScreenSoft />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/completeOrder">
            <CompleteOrder />
          </Route>
          <Route path="/printOptions">
            <PrintOptions />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
