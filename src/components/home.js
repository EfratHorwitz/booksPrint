import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
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
            <label >
                ברוכים הבאים לטקסט רץ -
                האתר שיעשה לך את זה בקלות
            </label>
            <br/><br/>
            <Button variant="contained" color="primary" size="large" onClick={manager}>כניסת מנהל</Button>
            <Button variant="contained" color="primary" size="large" onClick={getBid}>לקבלת הצעת מחיר</Button>
            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}
        </div>
    )

}
export default Home;