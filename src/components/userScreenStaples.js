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

import image30 from '../assets/30.png';
import image31 from '../assets/31.png';
import image32 from '../assets/32.png';
import image33 from '../assets/33.png';



function UserScreenStaples() {

    // const [order, setOrder] = useState(new Order());

    let history = useHistory();

    function endChoose() {
        if (localStorage.getItem('token') != null)
            history.push("/tmpAfterReg");
        else (
            history.push("/registration")
        );

    }

    return (
        <>
            <img src={image30} style={{
                width: '75%',
                marginLeft: '200px',
            }} />
            <div style={{width:'80%', marginLeft:'200px'}}>
                <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-around' }}>
                    <div>
                        <BookSize />
                    </div>
                    {/* <br></br> */}
                    <div>
                        <BookFormat />
                    </div>
                    {/* <br></br> */}
                    <div>
                        <NumPages />
                    </div>
                </div>
                <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-around' }}>
                    {/* <br></br> */}
                    <div>
                        <PaperType />
                    </div>
                    {/* <br></br> */}
                    <div>
                        <PrintColor />
                    </div>
                    {/* <br/> */}
                    <div>
                        <NumOfBooks />
                    </div>
                    {/* <br/> */}
                    <div>
                        <BindingTypeStaples />
                    </div><br />
                </div>
            </div>
            <img src={image31} style={{
                width: '200px',
                marginLeft: '650px',
            }} onClick={endChoose} />
            <div style={{ display: 'flex' }}>
                <img src={image33} style={{
                    width: '200px',
                }} />
                <img src={image32} style={{
                    width: '200px',
                    marginLeft: '1000px',
                }} />
            </div>
            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}


        </>
    )
}
export default UserScreenStaples;