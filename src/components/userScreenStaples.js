import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
// import Order from '../order';
import BookSize from './bookSize';
import BookFormat from './bookFormat';
import NumPages from './numPages';
import PaperType from './paperType';
import PrintColor from './printColor';
import NumOfBooks from './numOfBooks';
import BindingTypeStaples from './bindingTypeStaples';

import image3 from '../assets/3.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import image12 from '../assets/12.png';
import image11 from '../assets/11.png';
import image15 from '../assets/15.png';

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
        <>
            <img src={image3} style={{
                top: '285px',
                left: '676px',
                marginTop: '10px',
                marginLeft: '0%',
                width: '150px',
                height: '61px'
            }} />
            <img src={image12} style={{
                top: '285px',
                left: '676px',
                marginLeft: '20%',
                marginTop: '10px',
                width: '700pxpx',
                height: '70px'
            }} />
            <img src={image11} style={{
                width: '400px',
                height: '40px',
                marginLeft: '550px'
            }} />
            <div>
                <BookSize/>
            </div><br></br>

            <div>
                <BookFormat/>
            </div><br></br>

            <div>
                <NumPages/>
            </div><br></br>

            <div>
                <PaperType/>
            </div><br></br>

            <div>
                <PrintColor/>
            </div><br/>

            <div>
                <NumOfBooks/>
            </div><br/>

            <div>
                <BindingTypeStaples/>
            </div><br/>

            <Button type="button" variant="contained" color="primary" size="large" onClick={endChoose}> המשך </Button>
            
            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}
            
            
        </>
    )
}
export default UserScreenStaples;