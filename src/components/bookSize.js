import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveBookDetails } from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';
import SelectGeneric from './selectGeneric';

function BookSize() {

    const[sizeOptions, setSizeOptions] = useState([]);
    
    function getSizeOptions(){
        //  
        axios.get("http://localhost:4000/sizeoptions")
        .then(res => {setSizeOptions(res.data)}) 
        // .then(res => console.log("getSizeTypes succeeded",res.data))
        .catch(err => {console.log("error:" , err)})
    }

    useEffect(()=>{
        getSizeOptions()
    },[])

    useEffect(()=>{
        console.log("$", sizeOptions);       
    },[sizeOptions]);

    return (
        
        // <div>
        //     <FormControl variant="outlined" >
        //         <InputLabel id="demo-simple-select-outlined-label">גודל הספר</InputLabel>
        //         <Select
        //             labelId="demo-simple-select-outlined-label"
        //             id="demo-simple-select-outlined"
        //             value={2}
        //             onChange={(e) => props.saveBookDetails({"size": e.target.value})}
        //              label="Age"
        //         >
        //         {sizeOptions?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
        //         </Select>
        //     </FormControl>     
        // </div>
        
        <div>
            {/* <label>:גודל הספר</label><br></br> */}
            <SelectGeneric dataList = {sizeOptions} descStr = "size" myTitle = "גודל" />
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         orderBookSize: state.order.bookSize
//     };
// };
export default BookSize;