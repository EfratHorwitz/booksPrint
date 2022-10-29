import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";
import {saveUserDetails} from "../actions/saveUserDetails";
import { saveTokenDetails } from '../actions';
import axios from "axios";

function Registration(props) {

    // const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const [stam, setStam] = useState();
    const [userToInsert, setUserToInsert] = useState({});

    useEffect(()=>{
       setStam({username:"redux@redux", }) 
       debugger;
    },[])

    // const [tmpOrder, setTmpOrder] = useState();

    // const sizesTmp = 

    // const [book, setBook] = useState;

    // setTmpOrder(props.tmpOrder);

    // console.log("props", props.tmpOrder);
    let history = useHistory();

    function registration() {
        history.push("/tmpAfterReg");
    }

    function loginNewUser(user){ //no need for this "user"
        debugger;
        axios.post("http://localhost:4000/user", userToInsert)
    //   .then((res) => res.json())
    //   .then((res) => {debugger; saveUserDetails(res.data)})
      .then((res)=> {
        props.saveUserDetails(res.data.user); 
        props.saveTokenDetails({token: JSON.stringify(res.data.token)});
         console.log(res.data.user); localStorage.setItem('token', res.data.token) })
      .then(()=>{registration();})
    // .then((res)=> {console.log("loginNewUser", res.data)})
    //   .then((res)=> {debugger; console.log(res.data.token)})
    //   .then((res)=> {debugger; localStorage.setItem('token', JSON.stringify(res.data.token))})
      .catch((err) => { console.log("error: ", err) });
      debugger;
    }
    // localStorage.setItem('itemsArray', JSON.stringify(oldItems));
    
    const setParam = (key,val) => {
    setUserToInsert({...userToInsert, [key]: val})
    // props.saveUserDetails({key : val});
    }


    return (
        <div>
            {/* <div>
                <label>:משתמש קיים</label><br /><br />
                <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" onChange={(e) => setParam("username", e.target.value)}/><br /><br />
                <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" onChange={(e) => setParam("password", e.target.value)}/><br /><br />
            </div><br /> */}
            
            {/* <div> */}
                {/* <label>:משתמש חדש</label><br />
                {/* <TextField id="outlined-basic" label=":שם פרטי" variant="outlined" size="small" onChange={(e) => setParam("firstName", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":שם מלא" variant="outlined" size="small" onChange={(e) => setParam("fullname", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" onChange={(e) => setParam("username", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" onChange={(e) => setParam("password", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":מספר טלפון" variant="outlined" size="small" onChange={(e) => setParam("phone", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":כתובת מייל" variant="outlined" size="small" onChange={(e) => setParam("email", e.target.value)}/><br /><br />          */}
            {/* </div> */}
            
            <form>
                <label htmlFor="fullname" >:שם מלא</label><br />
                <input type="text" id="fullname" name="fullname" onChange={(e) => setParam("fullname", e.target.value)}></input><br /><br />
                <label htmlFor="username" >:שם משתמש</label><br />
                <input type="text" id="username" name="username" onChange={(e) => {setParam("username", e.target.value);
                // props.saveUserDetails(stam)
                }} ></input><br /><br />
                <label htmlFor="password" >:סיסמא</label><br />
                <input type="password" id="password" name="password" onChange={(e) => setParam("password", e.target.value)}></input><br /><br />
                {/* pattern = "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/" */}
                <label htmlFor="email" >:כתובת מייל</label><br />
                <input type="email" id="email" name="email" onChange={(e) => setParam("email", e.target.value)}></input><br /><br />
                {/* <label htmlFor="phone" >:מספר טלפון</label><br />
                <input type="phone" id="phone" name="phone" onChange={(e) => setParam("phone", e.target.value)}></input><br /><br /> */}

                <Button type="button" variant="contained" color="primary" size="large" onClick={() => loginNewUser(userToInsert)} >רישום</Button>
            </form>
            {/* <div>
                <Button variant="contained" color="primary" size="large" onClick={() => loginNewUser(userToInsert)} >רישום</Button>
            </div> */}
            {/* <div> */}
                {/* <Button variant="contained" color="primary" size="large" >קבלת הצעת מחיר במייל</Button> */}
                {/* onClick={() => loginExistingUser()} */}
            {/* </div> */}
            {/* <div> */}
                {/* <Button variant="contained" color="primary" size="large" onClick={registration}>אישור הזמנה</Button> */}
                {/* onClick={() => loginExistingUser()} */}
            {/* </div> */}
        </div>
    )
}

// export default Registration;

// const mapStateToProps = (state) => {
//     return {
//         tmpOrder: state.order
//     };
// };
export default connect(null, {saveTokenDetails, saveUserDetails})(Registration);