import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveBookDetails } from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';
import SelectGeneric from './selectGeneric';

function BindingTypeHard(){

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
        // <div>
        //     <FormControl variant="outlined" >
        //         <InputLabel id="demo-simple-select-outlined-label">:סוג הכריכה</InputLabel>
        //         <Select
        //             labelId="demo-simple-select-outlined-label"
        //             id="demo-simple-select-outlined"
        //             value={2}
        //             onChange={(e) => props.saveBookDetails({"bindingType": e.target.value})}
        //             label="Age"
        //         >
        //             {bindingTypesHard?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
        //         </Select>
        //     </FormControl>        
        // </div>
        <div>
            {/* <label>:סוג הכריכה</label><br></br> */}
            <SelectGeneric dataList = {bindingTypesHard} descStr = "bindingType" myTitle = "סוג הכריכה" />
        </div>
    )

}

export default BindingTypeHard;