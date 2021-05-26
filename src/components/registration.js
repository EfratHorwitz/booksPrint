import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom"

function Registration() {
    return (
        <div>
            <div>
                <label>:משתמש קיים</label><br /><br />
                <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" /><br /><br />
                <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" /><br /><br />
            </div><br />
            <div>
                <label>:משתמש חדש</label><br />
                <TextField id="outlined-basic" label=":שם פרטי" variant="outlined" size="small" /><br /><br />
                <TextField id="outlined-basic" label=":שם משפחה" variant="outlined" size="small" /><br /><br />
                <TextField id="outlined-basic" label=":מספר טלפון" variant="outlined" size="small" /><br /><br />
                <TextField id="outlined-basic" label=":כתובת מייל" variant="outlined" size="small" /><br /><br />
                <TextField id="outlined-basic" label=":שם משתמש" variant="outlined" size="small" /><br /><br />
                <TextField id="outlined-basic" label=":סיסמא" variant="outlined" size="small" /><br /><br />
            </div>
            <div>
                <Button variant="contained" color="primary" size="large" onClick={() => loginNewUser()}>רישום</Button>
            </div>
            <div>
                <Button variant="contained" color="primary" size="large" onClick={() => loginExistingUser()}>ביצוע הזמנת משתמש קיים</Button>
            </div>
            <div>
                <Button variant="contained" color="primary" size="large" onClick={() => loginExistingUser()}>קבלת הצעת מחיר במייל</Button>
            </div>
        </div>
    )
}
export default Registration;