import React from 'react';
import { saveBookDetails } from '../actions';
import {connect} from 'react-redux';
import TextField from '@mui/material/TextField';

function NumPages(props){

    return(
        <div>
            {/* <label>:מספר עמודים</label><br/> */}
            {/* <input type="number" min="10" step="2" onChange={(e) => props.saveBookDetails({"pagesNum": e.target.value})} /> */}
            <TextField onChange={(e) => props.saveBookDetails({"pagesNum": e.target.value})} id="standard-number" label="מספר עמודים" type="number" InputLabelProps={{shrink: true,}}variant="standard"/></div>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         orderNumPages: state.order.NumPages
//     };
// };
export default connect(null, { saveBookDetails })(NumPages);