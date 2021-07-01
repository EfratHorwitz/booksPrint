import React from 'react';
import { saveOrderDetails } from '../actions';
import {connect} from 'react-redux';

function NumPages(){

    return(
        <div>
            <label>:מספר עמודים</label>
            <input type="number" onChange={(e) => saveOrderDetails({"pagesNum": e.target.value})} />
            
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        orderNumPages: state.order.NumPages
    };
};
export default connect(mapStateToProps, { saveOrderDetails })(NumPages);