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
import Login from './components/login';
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom"
import axios from 'axios';
import { saveUserDetails } from './actions/saveUserDetails';
import { saveTokenDetails } from './actions/saveTokenDetails';
import SubApp from './components/subApp';


function App(props) {

  // let history = useHistory();
  const [token, setToken] = useState("");

  // function gotoReg() {
  //   history.push("/registration");
  // }

  // function getUserByToken(token) {
  //   debugger;
  //   axios.post("http://localhost:4000/user/verify", {
  //     token: token
  //   })
  //     // .then(res => {bindingTypes = res.data}) 
  //     .then(res => { props.saveUserDetails(res.data.user) })
  //     .then(() => { props.saveTokenDetails(token); gotoReg() })
  //     // .then(()=>{console.log("conslog", myOrders)})
  //     .catch(() => {
  //       console.log("registration from getUserByToken:");
  //       // gotoReg()
  //     })
  // }

  useEffect(() => {
    // fetch("http://localhost:4000/user?user=user1")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => { console.log("error: ", err) });
    // localStorage.setItem('language', 'JavaScript');
    // setToken(localStorage.getItem(("token")));
    // debugger;
    // let tok = localStorage.getItem('token');
    // // ()=>{tok?history.push("/login"):history.push("/registration")}
    // if (tok) {
    //   getUserByToken(tok)
    // } else {
    //   history.push("/registration");
    // }
  }, [])

  
//   function getUserByToken(token) {
//     debugger;
//     axios.post("http://localhost:4000/user/verify", {
//       token: token
//     })
//       // .then(res => {bindingTypes = res.data}) 
//       .then(res => { props.saveUserDetails(res.data);})
//       .then(() => { props.saveTokenDetails(JSON.stringify(token));})
//       // .then(()=>{console.log("conslog", myOrders)})
//       .catch((err) => {console.log("registration from getUserByToken:", err);
//         // gotoReg()
//       })
//   }

// useEffect(() => {
//     debugger;
//     // let tok = localStorage.getItem('token');
//     // ()=>{tok?history.push("/login"):history.push("/registration")}
//     if (localStorage.getItem('token')) {
//        getUserByToken(localStorage.getItem('token'))
//     } else {
//       // history.push("/registration");
//       return;
//     }
//   }, [])

  function logout() {
    debugger;
    localStorage.removeItem("token");
    localStorage.removeItem("bookId");
    localStorage.removeItem("userid");
    // setToken(null);
    props.saveTokenDetails(null);
    debugger;
  }

  console.log(props.token ? "props.token true" : "props.token false");

  return (
    //     <div>
    // <Trial/>
    //     </div>

    <Router>
      <div>
        {/* <div style={{display:'flex'}}> */}
        {/* <a href="http://localhost:3000/userProfile" >להתחברות</a><br />
        <a href="http://localhost:3000/userProfile" style={{ display: token ? "inline-block" : "none" }} >הפרופיל שלי</a><br />
        <a href="http://localhost:3000/" style={{ display: token ? "inline-block" : "none" }}>ליציאה</a><br />
        <a href="http://localhost:3000/myOrders" >ההזמנות שלי</a><br />
        <a href="http://localhost:3000/myProposals" >הצעות מחיר שלי</a> */}
        {/* </div> */}
        <SubApp />
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
          <Route path="/myProposals">
            <MyProposals />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <div style={{display:'flex',justifyContent:'space-around', alignItems:'center'}}>
          <a href="http://localhost:3000/login" >להתחברות</a><br />
          <a href="http://localhost:3000/userProfile" style={{ display: token ? "inline-block" : "none" }} >הפרופיל שלי</a><br />
          <a href="http://localhost:3000/" style={{ display: token ? "inline-block" : "none" }}>ליציאה</a><br />
          <a href="http://localhost:3000/myOrders" >ההזמנות שלי</a><br />
          <a href="http://localhost:3000/myProposals" >הצעות מחיר שלי</a>
        </div>

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
export default connect(mapStateToProps, { saveTokenDetails, saveUserDetails })(App);
