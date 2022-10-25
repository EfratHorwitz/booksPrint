import React from 'react';
import {connect} from 'react-redux';
import { saveBookDetails } from '../actions';

function NumOfBooks(props) {

    return (
        <div>
            <label>:כמות ספרים</label><br/>
            <input  type="number" min="10" step="5" onChange={(e) => props.saveBookDetails({"quantity": e.target.value})} /><br/><br/>
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