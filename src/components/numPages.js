import React from 'react';
import { saveBookDetails } from '../actions';
import {connect} from 'react-redux';

function NumPages(props){

    return(
        <div>
            <label>:מספר עמודים</label><br/>
            <input type="number" min="10" step="2" onChange={(e) => props.saveBookDetails({"pagesNum": e.target.value})} />
            
        </div>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         orderNumPages: state.order.NumPages
//     };
// };
export default connect(null, { saveBookDetails })(NumPages);