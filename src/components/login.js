import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Login(){

    return (
        <div>
            <div>
            <label>:משתמש קיים</label><br/><br/>
            <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" />
            </div><br/>
            <div>
            <label>:משתמש חדש</label><br/>
            <TextField id="outlined-basic" label=":שם פרטי" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":שם משפחה" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":מספר טלפון" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":כתובת מייל" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" /><br/><br/>
            <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" /><br/><br/>
            </div><br/>
            
            <div>
                <Button variant="contained" color="primary" size="large">כניסה</Button>
            </div>
        </div>
    );

}

export default Login;