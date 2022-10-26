import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import { saveBookDetails } from '../actions';

function PrintOptions(props) {

    let history = useHistory();

    function soft() {
        props.saveBookDetails({bookType: "soft"})
        history.push("/userScreenSoft");
    }
    function hard() {
        debugger;
        props.saveBookDetails({bookType: "hard"})
        history.push("/userScreenHard");
    }
    function staples() {
        debugger;
        props.saveBookDetails({bookType: "staples"})
        history.push("/userScreenStaples");
    }

    return (
        <div>
            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}

            <label>?מה תרצה להדפיס</label><br></br>
            <Button type="button" variant="contained" color="primary" size="large" onClick={soft}>ספר כריכה רכה</Button>
            <Button type="button" variant="contained" color="primary" size="large" onClick={staples}>ספר סיכות</Button>
            <Button type="button" variant="contained" color="primary" size="large" onClick={hard}>ספר כריכה קשה</Button><br></br>
        </div>
    )

}
export default connect(null, { saveBookDetails })(PrintOptions);

