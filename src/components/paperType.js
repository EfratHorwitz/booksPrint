import React, {useEffect, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveOrderDetails } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

function PaperType(props) {

    const[paperTypes, setPaperTypes] = useState([]);

    function getPaperTypes(){        
        axios.get("http://localhost:4000/papertypes")
        // .then(res => {bindingTypes = res.data}) 
        .then(res => {setPaperTypes(res.data)})
        .catch(err => { console.log("error:" , err)})
    }

    useEffect(()=>{
        getPaperTypes()        
    },[]);

    useEffect(()=>{
        console.log("$", paperTypes);       
    },[paperTypes]);

    return (
        <div>            
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">:סוג נייר</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={2}
                    onChange={(e) => props.saveOrderDetails({ "paperType": e.target.value })}
                    label="Age"
                >
                {paperTypes?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
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