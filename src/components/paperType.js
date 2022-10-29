import React, {useEffect, useState} from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { saveBookDetails } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';
import SelectGeneric from './selectGeneric';

function PaperType() {

    const[paperTypes, setPaperTypes] = useState([]);

    function getPaperTypes(){        
        axios.get("http://localhost:4000/papertypes")
        // .then(res => {bindingTypes = res.data}) 
        .then(res => {setPaperTypes(res.data)})
        // .then(()=>{console.log("paperType"); debugger;})
        .catch(err => { console.log("error:" , err)})
    }

    useEffect(()=>{
        debugger;
        getPaperTypes()        
    }, []);

    useEffect(()=>{
        console.log("$", paperTypes);       
    },[paperTypes]);

    return (
        // <div>            
        //     <FormControl variant="outlined" >
        //         <InputLabel id="demo-simple-select-outlined-label">:סוג נייר</InputLabel>
        //         <Select
        //             labelId="demo-simple-select-outlined-label"
        //             id="demo-simple-select-outlined"
        //             value={2}
        //             onChange={(e) => props.saveBookDetails({ "paperType": e.target.value })}
        //             label="Age"
        //         >
        //         {paperTypes?.map(item => {return <MenuItem value={item.name}>{item.name}</MenuItem>})}
        //         </Select>
        //     </FormControl>
        // </div>
        <div>
            {/* <label>:סוג נייר</label><br></br> */}
            <SelectGeneric dataList = {paperTypes} descStr = "paperType" myTitle = "סוג נייר" />
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         orderPaperType: state.order.paperType
//     };
// };
export default PaperType;