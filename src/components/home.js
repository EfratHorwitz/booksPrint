import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useHistory} from "react-router-dom"

function Home(){
return(
    <div>
        <label>?מה תרצה להדפיס</label><br></br>
    <Button variant="contained" color="primary" size="large" >ספר כריכה רכה</Button> 
    <Button variant="contained" color="primary" size="large" >ספר כריכה קשה</Button><br></br> 
    <Button variant="contained" color="primary" size="large" >כניסת מנהל</Button>
    </div>
)
}
export default Home;