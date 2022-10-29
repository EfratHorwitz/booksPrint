import React, { useState } from "react";
import PriceProposal from './priceProposal';
import { useHistory } from "react-router-dom";

import image24 from '../assets/24.png';
import image25 from '../assets/25.png';


function TmpAfterReg(props) {

    const [newEmail, setNewEmail] = useState();
    const history = useHistory();

    function finishOrder() {
        history.push("/completeOrder");
    }

    return (
        <>
            <img src={image24} style={{
                width: '90%',
                marginLeft: '110px',
                // marginTop: '20px'
            }} />
            <div>
                {/* <PriceProposal/> */}
            </div>
            <div>
                שלום הצעת המחיר שלך בהתאם לפרטים שהזנת היא
            </div>
            <button type="button" onClick={finishOrder} >מעוניין להמשיך לביצוע הזמנה?</button>
            <br/>
            <img src={image25} style={{
                width: '65%',
                // marginLeft: '110px',
                // marginTop: '20px'
            }} />
        </>

    )


}

export default TmpAfterReg;