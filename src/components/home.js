import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();
    
    function manager() {
        history.push("/managerScreen");
    }
    function getBid() {
        history.push("/printOptions");
    }
    return (
        <div>
            <label>
                ברוכים הבאים לאש הדפסות -
                האתר שיעשה לך את זה בקלות
            </label>
            <Button variant="contained" color="primary" size="large" onClick={manager}>כניסת מנהל</Button>
            <Button variant="contained" color="primary" size="large" onClick={getBid}>לקבלת הצעת מחיר</Button>
        </div>
    )

}
export default Home;