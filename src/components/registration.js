import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { saveUserDetails } from "../actions/saveUserDetails";
import { saveTokenDetails } from '../actions';
import axios from "axios";

import image21 from '../assets/21.png';
import image22 from '../assets/22.png';
import image23 from '../assets/23.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';



function Registration(props) {

    // const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const [stam, setStam] = useState();
    const [userToInsert, setUserToInsert] = useState({});

    useEffect(() => {
        setStam({ username: "redux@redux", })
        debugger;
    }, [])

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
            <img src={image21} style={{
                width: '75%',
                marginLeft: '200px',
            }} />
            
            {/* <img src={image22} style={{
                width: '25%',
                marginLeft: '600px',
                // marginTop: '20px'
            }} /> */}
            <div style={{
                width: '25%',
                marginLeft: '600px',
                textAlign: 'center', backgroundImage: `url(${image22})`, backgroundSize: 'cover',
            }}>
                {/* <label htmlFor="fullname" >:שם מלא</label><br />
                <input type="text" id="fullname" name="fullname" onChange={(e) => setParam("fullname", e.target.value)}></input><br /><br /> */}
                <TextField dir="rtl" id="standard-basic" label="שם מלא:" variant="standard" onChange={(e) => setParam("fullname", e.target.value)}/>
                {/* <label htmlFor="username" >:שם משתמש</label><br />
                <input type="text" id="username" name="username" onChange={(e) => {
                    setParam("username", e.target.value);
                    // props.saveUserDetails(stam)
                }} ></input><br /><br /> */}
                <TextField dir="rtl" id="standard-basic" label="שם משתמש:" variant="standard" onChange={(e) => {
                    setParam("username", e.target.value);
                    // props.saveUserDetails(stam)
                }}/>
                {/* <label htmlFor="password" >:סיסמא</label><br />
                <input type="password" id="password" name="password" onChange={(e) => setParam("password", e.target.value)}></input><br /><br /> */}
                {/* pattern = "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/" */}
                <TextField dir="rtl" id="standard-basic" label="סיסמא:" variant="standard" onChange={(e) => setParam("password", e.target.value)}/>
                {/* <label htmlFor="email" >:כתובת מייל</label><br />
                <input type="email" id="email" name="email" onChange={(e) => setParam("email", e.target.value)}></input><br /><br /> */}
                <TextField id="standard-basic" label=":כתובת מייל" variant="standard" onChange={(e) => setParam("email", e.target.value)}/><br/><br/>
                {/* <label htmlFor="phone" >:מספר טלפון</label><br />
                <input type="phone" id="phone" name="phone" onChange={(e) => setParam("phone", e.target.value)}></input><br /><br /> */}
                <img src={image23} onClick={registration}/>
                {/* <Button type="button" variant="contained" color="primary" size="large" onClick={() => loginNewUser(userToInsert)} >רישום</Button><br /><br /><br /> */}
            </div>
            <div style={{display:'flex', justifyContent:'space-between', }}>
            <img src={image9} style={{
                width: '10%',
                marginLeft: '200px',
                transform: 'matrix(0.84, -0.54, 0.54, 0.84, 0, )'
            }} /> 
            <img src={image8} style={{
                width: '10%',
                marginLeft: '200px',
                transform: 'matrix(0.84, -0.54, 0.54, 0.84, 0, )'
            }}/> 
            </div>
            {/* <div>
                <Button variant="contained" color="primary" size="large" onClick={() => loginNewUser(userToInsert)} >רישום</Button>
            </div> 
            <div>
                <Button variant="contained" color="primary" size="large" >קבלת הצעת מחיר במייל</Button>
                onClick={() => loginExistingUser()}
            </div>
            <div>
                <Button variant="contained" color="primary" size="large" onClick={registration}>אישור הזמנה</Button>
                onClick={() => loginExistingUser()}
            </div> */}
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
