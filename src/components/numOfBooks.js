import React from 'react';
import {connect} from 'react-redux';
import { saveOrderDetails } from '../actions';

function NumOfBooks() {

    return (
        <div>
            <label>:כמות</label>
            <input  type="number" min="10" step="5" onChange={(e) => saveOrderDetails({"quantity": e.target.value})} />
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        orderNumOfBooks: state.order.numOfBooks
    };
};
export default connect(mapStateToProps, { saveOrderDetails })(NumOfBooks);

// export default NumOfBooks;