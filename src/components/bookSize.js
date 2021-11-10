import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';

function BookSize(props) {

    // const sizeTypes = [];

    function getSizeTypes(){
        debugger
        axios.get("http://localhost:4000/sizeoptions")
        // .then(res => {debugger; bindingTypes = res.data}) 
        .then(res => console.log("getSizeTypes succeeded",res))
        .catch(err => {debugger; console.log("error:" , err)})
    }

    return (
        <div>
        <div>
            <label>
                :גודל
            </label><br /><br />
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">גודל הספר</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={(e) => props.saveOrderDetails({"size": e.target.value})}
                     label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem  value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
        <button onClick={getSizeTypes} >getSizeTypes</button>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         orderBookSize: state.order.bookSize
//     };
// };
export default connect(null, { saveOrderDetails })(BookSize);