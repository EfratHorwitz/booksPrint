import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import Order from '../order';
import BookSize from './bookSize';
import BookFormat from './bookFormat';
import NumPages from './numPages';
import PaperType from './paperType';
import PrintColor from './printColor';
import NumOfBooks from './numOfBooks';
import BindingTypeSoft from './bindingTypeSoft';


function UserScreenStaples() {

    // const [order, setOrder] = useState(new Order());
    
    let history = useHistory();

    function endChoose() {
        if(localStorage.getItem('token') != null)
            history.push("/tmpAfterReg");
            else(
                history.push("/registration")
            );
        
    }
    
    return (
        <div>

            <div>
                <BookSize/>
            </div>

            <div>
                <BookFormat/>
            </div>

            <div>
                <NumPages/>
            </div>

            <div>
                <PaperType/>
            </div>

            <div>
                <PrintColor/>
            </div>

            <div>
                <NumOfBooks/>
            </div>

            <div>
                <BindingTypeSoft/>
            </div>

            <Button variant="contained" color="primary" size="large" onClick={endChoose}> סיום</Button>
<a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a>
            
            
        </div>
    )
}
export default UserScreenStaples;