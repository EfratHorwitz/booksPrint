import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import {connect} from 'react-redux';

function BookFormat(){

    return(
        <div>
            <label>
                    :פורמט
                </label><br /><br />
                <FormControl variant="outlined" onChange={(e) => saveOrderDetails({"format": e.target.value})}>
                    <InputLabel id="demo-simple-select-outlined-label">פורמט</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={2}
                        onChange={() => { }}
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
    )

}

// const mapStateToProps = (state) => {
//     return {
//         format: state.order.format
//     };
// };
export default connect(null, { saveOrderDetails })(BookFormat);