import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import { connect } from 'react-redux';

function PaperType() {
    return (
        <div>
            <label>
                ":סוג נייר"
                </label><br /><br />
            <FormControl variant="outlined" onChange={(e) => saveOrderDetails({ "pagesNum": e.target.value })}>
                <InputLabel id="demo-simple-select-outlined-label">:סוג נייר</InputLabel>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        orderPaperType: state.order.paperType
    };
};
export default connect(mapStateToProps, { saveOrderDetails })(PaperType);