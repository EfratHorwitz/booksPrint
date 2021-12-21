import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';

function BindingTypeHard(props){

    const[bindingTypesHard,setBindingTypesHard] = useState([]);

    function getBindingTypesHard(){        
        axios.get("http://localhost:4000/bindingtypes")
        .then(res => {setBindingTypesHard(res.data)}) 
        // .then(res => console.log("getBindingTypes succeeded",res))
        .catch(err => {console.log("error:" , err)})
    }

    useEffect(()=>{
        getBindingTypesHard()        
    }, []);

    useEffect(()=>{
        console.log("$", bindingTypesHard);       
    },[bindingTypesHard]);

    return(
        <div>
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">פורמט</InputLabel>
                {  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={(e) => props.saveOrderDetails({"bindingType": e.target.value})}
                    label="Age"
                >
                    {bindingTypesHard?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
                </Select>}
            </FormControl>        
        </div>
    )

}

export default connect(null, { saveOrderDetails })(BindingTypeHard);