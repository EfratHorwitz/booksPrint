import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';
import SelectGeneric from './selectGeneric';

function BindingTypeSoft(){

    const[bindingTypesSoft, setBindingTypesSoft] = useState([]);

    function getBindingTypesSoft(){        
        axios.get("http://localhost:4000/bindingtypes")
        .then(res => {setBindingTypesSoft(res.data)}) 
        // .then(res => console.log("getBindingTypes succeeded",res))
        .catch(err => {console.log("error:" , err)})
    }

    useEffect(()=>{
        getBindingTypesSoft()        
    }, []);

    useEffect(()=>{
        console.log("$", bindingTypesSoft);       
    },[bindingTypesSoft]);

    return(
        // <div>
        //     <FormControl variant="outlined" >
        //         <InputLabel id="demo-simple-select-outlined-label">פורמט</InputLabel>
        //         <Select
        //             labelId="demo-simple-select-outlined-label"
        //             id="demo-simple-select-outlined"
        //             value={2}
        //             onChange={(e) => props.saveOrderDetails({"bindingType": e.target.value})}
        //             label="Age"
        //         >
        //         {bindingTypesSoft?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
        //         </Select>
        //     </FormControl>
        // </div>
        <div>
            <label>:סוג הכריכה</label><br></br>
            <SelectGeneric dataList = {bindingTypesSoft} descStr = "bindingType" myTitle = "bookSize" />
        </div>
    )

}

export default BindingTypeSoft;