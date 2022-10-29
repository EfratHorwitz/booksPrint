import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {saveTokenDetails} from '../actions/saveTokenDetails';
import {saveUserDetails} from '../actions/saveUserDetails';
import {connect} from 'react-redux';

function SubApp(props){

    // function gotoReg() {
    //     history.push("/registration");
    //   }
    let history = useHistory();

    function getUserByToken(token) {
        debugger;
        axios.post("http://localhost:4000/user/verify", {
          token: token
        })
          // .then(res => {bindingTypes = res.data}) 
          .then(res => { props.saveUserDetails(res.data);})
          .then(() => { props.saveTokenDetails(JSON.stringify(token));})
          // .then(()=>{console.log("conslog", myOrders)})
          .catch((err) => {console.log("registration from getUserByToken:", err);
            // gotoReg()
          })
      }

    useEffect(() => {
        debugger;
        // let tok = localStorage.getItem('token');
        // ()=>{tok?history.push("/login"):history.push("/registration")}
        if (localStorage.getItem('token')) {
           getUserByToken(localStorage.getItem('token'))
        } else {
        //   history.push("/nothing");
        //   return;
        }
      }, [])



    return (
        <div></div>
    )
}
// export default SubApp;
export default connect(null, { saveTokenDetails, saveUserDetails })(SubApp);