import React, {useEffect, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveBookDetails } from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';
import SelectGeneric from './selectGeneric';

function BindingTypeStaples(){

    const[bindingTypesStaples, setBindingTypesStaples] = useState([]);

    function getBindingTypesStaples(){        
        axios.get("http://localhost:4000/bindingtypes")
        .then(res => {setBindingTypesStaples(res.data)}) 
        // .then(res => console.log("getBindingTypes succeeded",res))
        .catch(err => {console.log("error:" , err)})
    }

    useEffect(()=>{
        getBindingTypesStaples()        
    }, []);

    useEffect(()=>{
        console.log("$", bindingTypesStaples);       
    },[bindingTypesStaples]);

    return(
        // <div>
        //     <FormControl variant="outlined" >
        //         <InputLabel id="demo-simple-select-outlined-label">פורמט</InputLabel>
        //         <Select
        //             labelId="demo-simple-select-outlined-label"
        //             id="demo-simple-select-outlined"
        //             value={2}
        //             onChange={(e) => props.saveBookDetails({"bindingType": e.target.value})}
        //             label="Age"
        //         >
        //         {bindingTypesStaples?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
        //         </Select>
        //     </FormControl>
        // </div>
        <div>
            {/* <label>:סוג הכריכה</label><br></br> */}
            <SelectGeneric dataList = {bindingTypesStaples} descStr = "bindingType" myTitle = "סוג הכריכה" />
        </div>
    )

}

export default BindingTypeStaples;