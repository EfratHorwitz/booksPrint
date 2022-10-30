import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";

import image1 from '../assets/1.png';
import image29 from '../assets/29.png';
import image34 from '../assets/34.png';
import image35 from '../assets/29.png';

function Home() {
    let history = useHistory();
    // let date = new Date();
    function manager() {
        history.push("/managerScreen");
    }
    function getBid() {
        history.push("/userScreenStaples");
    }
    return (
        <div>
            <img src={image34} style={{
                width: '75%',
                marginLeft: '200px'
            }} onClick={getBid} />
            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}
        </div>
    )

}
export default Home;