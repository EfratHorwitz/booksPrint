import React from 'react';
import {connect} from 'react-redux';
import { saveOrderDetails } from '../actions';

function NumOfBooks(props) {

    return (
        <div>
            <label>:כמות</label>
            <input  type="number" min="10" step="5" onChange={(e) => props.saveOrderDetails({"quantity": e.target.value})} />
        </div>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         orderNumOfBooks: state.order.numOfBooks
//     };
// };
export default connect(null, { saveOrderDetails })(NumOfBooks);

// export default NumOfBooks;