import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom"

function Home() {

    let history = useHistory();

    function soft() {
        history.push("/userScreenSoft");
    }
    function hard() {
        history.push("/userScreenHard");
    }
        return (
            <div>
                <label>?מה תרצה להדפיס</label><br></br>
                <Button variant="contained" color="primary" size="large" onClick={soft}>ספר כריכה רכה</Button>
                <Button variant="contained" color="primary" size="large" onClick={hard}>ספר כריכה קשה</Button><br></br>
                <Button variant="contained" color="primary" size="large" >כניסת מנהל</Button>
            </div>
        )
    }
    export default Home;