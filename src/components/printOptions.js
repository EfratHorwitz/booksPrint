import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import { saveBookDetails } from '../actions';

import image7 from '../assets/7.png';
import image2 from '../assets/2.png';
import image4 from '../assets/4.png';
import image6 from '../assets/6.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';

function PrintOptions(props) {

    let history = useHistory();

    function soft() {
        props.saveBookDetails({bookType: "soft"})
        history.push("/userScreenSoft");
    }
    function hard() {
         ;
        props.saveBookDetails({bookType: "hard"})
        history.push("/userScreenHard");
    }
    function staples() {
         ;
        props.saveBookDetails({bookType: "staples"})
        history.push("/userScreenStaples");
    }

    return (
        <div>
            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}

            <img src={image7} style={{
                width: '75%',
                marginLeft: '200px',
                // marginTop: '20px'
            }} />
            <div style={{display:'flex', justifyContent:'center',marginTop: '60px'}}>
            <img src={image2} style={{
                width: '10%',
                marginLeft: '200px'
            }} onClick={soft}/>
            <img src={image4} style={{
                width: '10%',
                marginLeft: '200px'
            }} onClick={hard}/>
            <img src={image6} style={{
                width: '10%',
                marginLeft: '200px'
            }}onClick={staples} /> 
            </div>
            <div style={{display:'flex', justifyContent:'space-between', }}>
            <img src={image9} style={{
                width: '12%',
                marginLeft: '200px',
                transform: 'matrix(0.84, -0.54, 0.54, 0.84, 0, )'
            }} /> 
            <img src={image8} style={{
                width: '12%',
                marginLeft: '200px',
                transform: 'matrix(0.84, -0.54, 0.54, 0.84, 0, )'
            }}/> 
            </div>

            {/* <Button type="button" variant="contained" color="primary" size="large" onClick={soft}>ספר כריכה רכה</Button>
            <Button type="button" variant="contained" color="primary" size="large" onClick={staples}>ספר סיכות</Button>
            <Button type="button" variant="contained" color="primary" size="large" onClick={hard}>ספר כריכה קשה</Button><br></br> */}
        </div>
    )

}
export default connect(null, { saveBookDetails })(PrintOptions);

