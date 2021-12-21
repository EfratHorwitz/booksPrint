import React, {useEffect, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

function PrintColor(props) {

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
        <div>
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">:צבע הדפסה</InputLabel>
                < Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={(e) => props.saveOrderDetails({ "color": e.target.value })}
                    label="Age"
                >                
                {printColorOptions?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
                </Select>
            </FormControl>
        </div>
    )

}


// const mapStateToProps = (state) => {
//     return {
//         orderPrintColor: state.order.printColor
//     };
// };
export default connect(null, { saveOrderDetails })(PrintColor);