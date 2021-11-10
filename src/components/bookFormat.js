import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';

function BookFormat(props){

    // const formatTypes = [];

    function getFormatTypes(){
        debugger
        axios.get("http://localhost:4000/formattypes")
        // .then(res => {debugger; bindingTypes = res.data}) 
        .then(res => console.log("getFormatTypes succeeded",res))
        .catch(err => {debugger; console.log("error:" , err)})
    }



    return(
        <div>
            <div>
                <label>
                        :פורמט
                    </label><br /><br />
                    <FormControl variant="outlined" >
                        <InputLabel id="demo-simple-select-outlined-label">פורמט</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={2}
                            onChange={(e) => props.saveOrderDetails({"format": e.target.value})}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>רגיל</MenuItem>
                            <MenuItem value={20}>אלבומי</MenuItem>
                        </Select>
                    </FormControl>
            </div>
        <button onClick={getFormatTypes}>getFormatTypes</button>
        </div>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         format: state.order.format
//     };
// };
export default connect(null, { saveOrderDetails })(BookFormat);