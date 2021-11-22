import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";
import {saveUserDetails} from "../actions/saveUserDetails";
import axios from "axios";

function Registration(props) {

    // const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const [userToInsert, setUserToInsert] = useState({});
    const [tmpOrder, setTmpOrder] = useState();

    // const sizesTmp = 

    // const [book, setBook] = useState;

    // setTmpOrder(props.tmpOrder);

    // console.log("props", props.tmpOrder);
    let history = useHistory();

    function registration() {
        history.push("/completeOrder");
    }

    function loginNewUser(user){
        debugger;
        axios.post("http://localhost:4000/user", userToInsert)
    //   .then((res) => res.json())
    //   .then((res) => {debugger; saveUserDetails(res.data)})
      .then((res)=> {debugger; saveUserDetails(res.data); console.log(res.data.user); localStorage.setItem('token', JSON.stringify(res.data.token));alert("you registered successfully")})
    //   .then((res)=> {debugger; console.log(res.data.token)})
    //   .then((res)=> {debugger; localStorage.setItem('token', JSON.stringify(res.data.token))})
      .catch((err) => { console.log("error: ", err) });
debugger;
    }
    // localStorage.setItem('itemsArray', JSON.stringify(oldItems));

   const setParam = (key,val) => {
    setUserToInsert({...userToInsert, [key]: val})
    }


    return (
        <div>
            {/* <div>
                <label>:משתמש קיים</label><br /><br />
                <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" onChange={(e) => setParam("userName", e.target.value)}/><br /><br />
                <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" onChange={(e) => setParam("password", e.target.value)}/><br /><br />
            </div><br /> */}
            
            {/* <div> */}
                {/* <label>:משתמש חדש</label><br />
                {/* <TextField id="outlined-basic" label=":שם פרטי" variant="outlined" size="small" onChange={(e) => setParam("firstName", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":שם מלא" variant="outlined" size="small" onChange={(e) => setParam("fullname", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" onChange={(e) => setParam("userName", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" onChange={(e) => setParam("password", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":מספר טלפון" variant="outlined" size="small" onChange={(e) => setParam("phone", e.target.value)}/><br /><br /> */}
                {/* <TextField id="outlined-basic" label=":כתובת מייל" variant="outlined" size="small" onChange={(e) => setParam("email", e.target.value)}/><br /><br />          */}
            {/* </div> */}
            
            <form>
                <label htmlFor="fullname" >:שם מלא</label><br />
                <input type="text" id="fullname" name="fullname" onChange={(e) => setParam("fullname", e.target.value)}></input><br /><br />
                <label htmlFor="userName" >:שם משתמש</label><br />
                <input type="text" id="userName" name="userName" onChange={(e) => setParam("userName", e.target.value)} ></input><br /><br />
                <label htmlFor="password" >:סיסמא</label><br />
                <input type="password" id="password" name="password" onChange={(e) => setParam("password", e.target.value)}></input><br /><br />
                {/* pattern = "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/" */}
                <label htmlFor="email" >:כתובת מייל</label><br />
                <input type="email" id="email" name="email" onChange={(e) => setParam("email", e.target.value)}></input><br /><br />
                <Button variant="contained" color="primary" size="large" onClick={() => loginNewUser(userToInsert)} >רישום</Button>
            </form>
            {/* <div>
                <Button variant="contained" color="primary" size="large" onClick={() => loginNewUser(userToInsert)} >רישום</Button>
            </div> */}
            <div>
                <Button variant="contained" color="primary" size="large" >קבלת הצעת מחיר במייל</Button>
                {/* onClick={() => loginExistingUser()} */}
            </div>
            <div>
                <Button variant="contained" color="primary" size="large" onClick={registration}>אישור הזמנה</Button>
                {/* onClick={() => loginExistingUser()} */}
            </div>
        </div>
    )
}

// export default Registration;

const mapStateToProps = (state) => {
    return {
        tmpOrder: state.order
    };
};
export default connect(mapStateToProps)(Registration);