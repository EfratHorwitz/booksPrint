import React, {useEffect, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';
import SelectGeneric from './selectGeneric';

function BookFormat(){

    const[formatTypes, setFormatTypes] = useState([]);

    function getFormatTypes(){
        // debugger
        axios.get("http://localhost:4000/formattypes")
        .then(res => {setFormatTypes(res.data)}) 
        // .then(res => console.log("getFormatTypes succeeded",res))
        .catch(err => {console.log("error:" , err)})
    }

    useEffect(()=>{
        getFormatTypes()        
    },[]);

    useEffect(()=>{
        console.log("$", formatTypes);       
    },[formatTypes]);

    return(
        // <div>
        //     <FormControl variant="outlined" >
        //         <InputLabel id="demo-simple-select-outlined-label">פורמט</InputLabel>
        //         <Select
        //             labelId="demo-simple-select-outlined-label"
        //             id="demo-simple-select-outlined"
        //             value={2}
        //             onChange={(e) => props.saveOrderDetails({"format": e.target.value})}
        //             label="Age"
        //         >
        //         {formatTypes?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
        //         </Select>
        //     </FormControl>
        // </div>
        <div>
        {/* <label>:פורמט</label><br></br> */}
        <SelectGeneric dataList = {formatTypes} descStr = "format" myTitle = "פורמט" />
    </div>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         format: state.order.format
//     };
// };
export default BookFormat;