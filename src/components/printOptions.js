import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function PrintOptions() {

    let history = useHistory();

    function soft() {
        history.push("/userScreenSoft");
    }
    function hard() {
        history.push("/userScreenHard");
    }
    function staples() {
        history.push("/userScreenStaples");
    }

    return (
        <div>
<a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a>

            <label>?מה תרצה להדפיס</label><br></br>
            <Button variant="contained" color="primary" size="large" onClick={soft}>ספר כריכה רכה</Button>
            <Button variant="contained" color="primary" size="large" onClick={staples}>ספר סיכות</Button>
            <Button variant="contained" color="primary" size="large" onClick={hard}>ספר כריכה קשה</Button><br></br>
        </div>
    )

}
 export default PrintOptions;

