import React from 'react';
import { connect } from 'react-redux';
import { saveBookDetails } from '../actions';
import TextField from '@mui/material/TextField';


function NumOfBooks(props) {

    return (
        <div>
            {/* <label>:כמות ספרים</label><br /> */}
            {/* <input type="number" min="10" step="5" onChange={(e) => { props.saveBookDetails({ "quantity": e.target.value }) }} /><br /><br /> */}
            <TextField onChange={(e) => { props.saveBookDetails({ "quantity": e.target.value }) }} id="standard-number" label="כמות ספרים" type="number" InputLabelProps={{ shrink: true, }} variant="standard" />
        </div>

    )

}

// const mapStateToProps = (state) => {
//     return {
//         orderNumOfBooks: state.order.numOfBooks
//     };
// };
export default connect(null, { saveBookDetails })(NumOfBooks);

// export default NumOfBooks;