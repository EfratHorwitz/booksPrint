import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { saveUserDetails } from '../actions/saveUserDetails';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import image3 from '../assets/3.png';
import image22 from '../assets/22.png';
import image25 from '../assets/25.png';



function Login() {

    const [existingUser, setExistingUser] = useState({});

    function login(){
         ;
        axios.get(`http://localhost:4000/user/${existingUser.username}/${existingUser.password}`)
            .then((res) => {
                saveUserDetails(res.data); console.log(res.data);
                localStorage.setItem("userid", res.data._id)
            })
            .catch(
                (err) => {
                    if (err.response.status == '404') {
                        alert('404 user not found')
                    }
                }
            )
    }

    const setParam = (key, val) => {
        setExistingUser({ ...existingUser, [key]: val })
        // props.saveUserDetails({key : val});
    }

    return (
        <div>
            <img src={image3} style={{
                width: '10%',
                marginLeft: '700px',
            }} />

                <div style={{
                width: '25%',
                marginLeft: '600px',
                marginTop: '80px',
                textAlign: 'center', backgroundImage: `url(${image22})`, backgroundSize: 'cover',
            }}>
                <br/><br/>
                    <TextField dir="rtl" id="standard-basic" label="שם משתמש:" variant="standard" onChange={(e) => { setParam("username", e.target.value) }} /><br/><br/>
                    <TextField dir="rtl" id="standard-basic" label="סיסמא:" variant="standard" onChange={(e) => { setParam("password", e.target.value) }} /><br/><br/>
                    <Button style={{ backgroundColor: "#2A3B8F", color: '#FFA259' }} type="button" variant="contained"  size="large" onClick={login} >התחבר</Button><br/><br/><br/>
                </div>
                <img src={image25} style={{
                width: '65%',
            }} />
        </div>
    )
}
// export default Login;
export default connect(null, { saveUserDetails })(Login);
