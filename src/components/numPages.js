import React from 'react';
import { saveOrderDetails } from '../actions';
import {connect} from 'react-redux';

function NumPages(props){

    return(
        <div>
            <label>:מספר עמודים</label>
            <input type="number" min="10" step="2" onChange={(e) => props.saveOrderDetails({"pagesNum": e.target.value})} />
            
        </div>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         orderNumPages: state.order.NumPages
//     };
// };
export default connect(null, { saveOrderDetails })(NumPages);