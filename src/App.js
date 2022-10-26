import React from 'react';
import Home from './components/home';
import UserScreenHard from './components/userScreenHard';
import UserScreenSoft from './components/userScreenSoft';
import UserScreenStaples from './components/userScreenStaples';
import CompleteOrder from './components/completeOrder';
import Registration from './components/registration';
import ManagerScreen from './components/managerScreen';
import TmpAfterReg from './components/tmpAfterReg'
import UserProfile from './components/userProfile'
// import OrderDetails from './components/orderDetails';
import PrintOptions from './components/printOptions';
import BindingTypeHard from './components/bindingTypeHard';
import BookFormat from './components/bookFormat';
import BookSize from './components/bookSize';
import Trial from './components/trial';
import PrintColor from './components/printColor';
import Extras from './components/extras';
import PriceProposal from './components/priceProposal';
import UploadFile from './components/uploadFile';
import Goodby from './components/goodby';
import MyOrders from './components/myOrders';
import MyProposals from './components/myProposals';
import PaperType from './components/paperType';
import {connect} from "react-redux";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"


function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    // fetch("http://localhost:4000/user?user=user1")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => { console.log("error: ", err) });
      // localStorage.setItem('language', 'JavaScript');
    setToken(localStorage.getItem(("token")));

  }, [])

  function logout(){
    debugger;
    localStorage.setItem("token", null);
    setToken(null);
    debugger;
  }

  console.log(token?"true":"false");

  return (
//     <div>
// <Trial/>
//     </div>

    <Router>
      <div>
      {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >להתחברות</a> */}
      <a href="http://localhost:3000/userProfile" style={{display: token?"inline-block":"none"}} >הפרופיל שלי</a><br/>
      {/* <a href="http://localhost:3000/" style={{display: token?"inline-block":"none"}} onClick={logout}>להתנתק</a> */}
      <a href="http://localhost:3000/myOrders" >ההזמנות שלי</a>
      {/* <a href="http://localhost:3000/userProfile" onClick={} >הצעות מחיר שלי</a> */}
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
          <Route path="/userScreenStaples">
            <UserScreenStaples />
          </Route>
          <Route path="/tmpAfterReg" exact>
            <TmpAfterReg />
          </Route>
          <Route path="/userProfile">
            <UserProfile />
          </Route>          
          <Route path="/bindingTypeHard">
            <BindingTypeHard />
          </Route>
          <Route path="/bookFormat">
            <BookFormat />
          </Route>          
          <Route path="/sizeTypes">
            <BookSize />
          </Route>
          <Route path="/trial">
            <Trial />
          </Route>
          <Route path="/coloroptions">
            <PrintColor />
          </Route>
          <Route path="/extras">
            <Extras />
          </Route>          
          <Route path="/priceProposal">
            <PriceProposal />
          </Route>
          <Route path="/uploadFile">
            <UploadFile />
          </Route>
          <Route path="/goodby">
            <Goodby />
          </Route>
          <Route path="/myOrders">
            <MyOrders />
          </Route>
          <Route path="/paperType">
            <PaperType />
          </Route>
        </Switch>
        
      </div>
    </Router>
  )
}

// export default App;

const mapStateToProps = (state) => {
  return {
      token: state.token
  };
};
export default connect(mapStateToProps)(App);
