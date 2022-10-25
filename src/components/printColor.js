import React, {useEffect, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveBookDetails } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';
import SelectGeneric from './selectGeneric';

function PrintColor() {

    // let printColorOptions = [];
    const[printColorOptions, setPrintColorOptions] = useState([]);

    function getPrintColorOptions(){        
        axios.get("http://localhost:4000/coloroptions")
        // .then(res => {bindingTypes = res.data}) 
        .then(res => {setPrintColorOptions(res.data)})
        .catch(err => { console.log("error:" , err)})
    }

    useEffect(()=>{
        getPrintColorOptions()        
    },[]);

    useEffect(()=>{
        console.log("$", printColorOptions);       
    },[printColorOptions]);

    return (
        // <div>
        //     <FormControl variant="outlined" >
        //         <InputLabel id="demo-simple-select-outlined-label">:צבע הדפסה</InputLabel>
        //         < Select
        //             labelId="demo-simple-select-outlined-label"
        //             id="demo-simple-select-outlined"
        //             value={2}
        //             onChange={(e) => props.saveBookDetails({ "color": e.target.value })}
        //             label="Age"
        //         >                
        //         {printColorOptions?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
        //         </Select>
        //     </FormControl>
        // </div>
        <div>
            {/* <label>:צבע הדפסה</label><br></br> */}
            <SelectGeneric dataList = {printColorOptions} descStr = "color" myTitle = "צבע הדפסה" />
        </div>
    )

}


// const mapStateToProps = (state) => {
//     return {
//         orderPrintColor: state.order.printColor
//     };
// };
export default PrintColor;