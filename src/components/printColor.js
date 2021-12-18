import React, {useEffect} from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

function PrintColor(props) {

    let printColorOptions = [];

    function getPrintColorOptions(){        
        axios.get("http://localhost:4000/coloroptions")
        // .then(res => {bindingTypes = res.data}) 
        .then(res => {printColorOptions = res.data ;console.log("printColorOptions",printColorOptions)})
        .catch(err => { console.log("error:" , err)})
    }

    useEffect(()=>{
        getPrintColorOptions()        
    },[]);

    return (
        <div>
            <label>
                :צבע הדפסה
            </label><br /><br />
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">:צבע הדפסה</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={(e) => props.saveOrderDetails({ "color": e.target.value })}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>שחור לבן</MenuItem>
                    <MenuItem value={20}>צבעוני</MenuItem>
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