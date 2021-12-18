import React, {useEffect} from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

function PaperType(props) {

    let paperTypes = [];

    function getPaperTypes(){        
        axios.get("http://localhost:4000/papertypes")
        // .then(res => {bindingTypes = res.data}) 
        .then(res => {paperTypes = res.data ;console.log("paperTypes",paperTypes)})
        .catch(err => { console.log("error:" , err)})
    }

    useEffect(()=>{
        getPaperTypes()        
    },[]);

    return (
        <div>
            <label>
                ":סוג נייר"
                </label><br /><br />
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">:סוג נייר</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={(e) => props.saveOrderDetails({ "paperType": e.target.value })}
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

// const mapStateToProps = (state) => {
//     return {
//         orderPaperType: state.order.paperType
//     };
// };
export default connect(null, { saveOrderDetails })(PaperType);