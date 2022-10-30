import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {saveUserDetails} from '../actions/saveUserDetails';
import {connect} from 'react-redux';

function Login() {

    const [existingUser, setExistingUser] = useState({});

    function login(){
         ;
        axios.get(`http://localhost:4000/user/${existingUser.username}/${existingUser.password}`)
        .then((res)=>{saveUserDetails(res.data); console.log(res.data);
            localStorage.setItem("userid", res.data._id)
        })
        .catch(
            (err)=>{if(err.response.status == '404'){
                alert('404 user not found')
            }}
            )
    }

    const setParam = (key,val) => {
        setExistingUser({...existingUser, [key]: val})
        // props.saveUserDetails({key : val});
        }

    return (
        <div>
            <h3>התחברות</h3>
            <div>
                <label>שם משתמש:</label>
                <input onChange={(e)=>{setParam("username", e.target.value)}} />
            </div>
            <div>
                <label>סיסמא:</label>
                <input type='password' onChange={(e)=>{setParam("password", e.target.value)}} />
            </div>
            <Button type="button" variant="contained" color="primary" size="large" onClick={login} >התחבר</Button>
        </div>
    )
}
// export default Login;
export default connect(null, {saveUserDetails})(Login);
