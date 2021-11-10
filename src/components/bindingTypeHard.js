import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';

function BindingTypeHard(props){

    // const bindingTypes = [];

    function getBindingTypes(){
        debugger
        axios.get("http://localhost:4000/bindingtypes")
        // .then(res => {debugger; bindingTypes = res.data}) 
        .then(res => console.log("getBindingTypes succeeded",res))
        .catch(err => {debugger; console.log("error:" , err)})
    }



    return(
    <div>
        <div>
            <FormControl variant="outlined" >
                    <InputLabel id="demo-simple-select-outlined-label">פורמט</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={2}
                        onChange={(e) => props.saveOrderDetails({"bindingType": e.target.value})}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>רגיל</MenuItem>
                        <MenuItem value={20}>אלבומי</MenuItem>
                    </Select>
                </FormControl>
        </div>
        <button onClick={getBindingTypes} >getBindingTypes</button>
    </div>
    )

}

export default connect(null, { saveOrderDetails })(BindingTypeHard);