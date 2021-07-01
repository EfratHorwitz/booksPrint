import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import {connect} from "react-redux"

function Registration(props) {

    
    const [userToInsert, setUserToInsert] = useState();
    const [tmpOrder, setTmpOrder] = useState();
    // const [book, setBook] = useState;

    setTmpOrder(props.tmpOrder);

    let history = useHistory();

    function registartion() {
        history.push("/completeOrder");
    }

    function loginNewUser(user){
        fetch("http://localhost:3000/login?user=user}")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => { console.log("error: ", err) });

    }

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
            <div>
                <label>:משתמש חדש</label><br />
                <TextField id="outlined-basic" label=":שם פרטי" variant="outlined" size="small" onChange={(e) => setParam("firstName", e.target.value)}/><br /><br />
                <TextField id="outlined-basic" label=":שם משפחה" variant="outlined" size="small" onChange={(e) => setParam("lastName", e.target.value)}/><br /><br />
                <TextField id="outlined-basic" label=":מספר טלפון" variant="outlined" size="small" onChange={(e) => setParam("phone", e.target.value)}/><br /><br />
                <TextField id="outlined-basic" label=":כתובת מייל" variant="outlined" size="small" onChange={(e) => setParam("email", e.target.value)}/><br /><br />
                <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" onChange={(e) => setParam("userName", e.target.value)}/><br /><br />
                <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" onChange={(e) => setParam("password", e.target.value)}/><br /><br />
            </div>
            <div>
                <Button variant="contained" color="primary" size="large" onClick={() => loginNewUser(userToInsert)} >רישום</Button>
            </div>
            <div>
                <Button variant="contained" color="primary" size="large" >קבלת הצעת מחיר במייל</Button>
                {/* onClick={() => loginExistingUser()} */}
            </div>
            <div>
                <Button variant="contained" color="primary" size="large" onClick={registartion}>אישור הזמנה</Button>
                {/* onClick={() => loginExistingUser()} */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tmpOrder: state.tmpOrder
    };
};
export default connect(mapStateToProps, {  })(Registration);