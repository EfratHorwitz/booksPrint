import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useHistory} from "react-router-dom"

function Login(){

    let history = useHistory();

     function loginNewUser(){
        //check if user already exist
        history.push("/userScreen");//change to replace instead of push
     }
     function  loginExistingUser(){
        //check if user already exist
        //if is a manager
        //history.push("/managerScreen");
        //else
        history.push("/userScreen"); //change to replace instead of push
     }

    return (
        <div>
            <div>
            <label>:משתמש קיים</label><br/><br/>
            <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" /><br/><br/>
            <div>
                <Button variant="contained" color="primary" size="large" onClick={()=>loginExistingUser()}>כניסת משתמש קיים</Button>
            </div>
            </div><br/>
            <div>
            <label>:משתמש חדש</label><br/>
            <TextField id="outlined-basic" label=":שם פרטי" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":שם משפחה" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":מספר טלפון" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":כתובת מייל" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" /><br/><br/>
            </div>
            <div>
                <Button variant="contained" color="primary" size="large" onClick={()=>loginNewUser()}>כניסת משתמש חדש</Button>
            </div>
        </div>
    );

}






export default Login;