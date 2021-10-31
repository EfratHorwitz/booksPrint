import React from 'react';
import {connect} from 'react-redux';
import { saveOrderDetails } from '../actions';

function NumOfBooks(props) {

    return (
        <div>
            <label>:כמות</label><br/>
            <input  type="number" min="10" step="5" onChange={(e) => props.saveOrderDetails({"quantity": e.target.value})} /><br/><br/>
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