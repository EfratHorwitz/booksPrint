import React, {useState} from "react";
import PriceProposal from './priceProposal';
import { useHistory } from "react-router-dom";


function TmpAfterReg(props){

    const[newEmail, setNewEmail] = useState();
    const history = useHistory();

    function finishOrder(){
        history.push("/completeOrder");
    }

    return(
        <div>
            <div>
            !שלום
            <br/>
            הצעת מחיר נשלחה לכתובת המייל שהזנת ברישום
            </div>
            <div>
                {/* <PriceProposal/> */}
            </div>
            <button type="button" onClick={finishOrder} >מעוניין להמשיך לביצוע הזמנה?</button>
        </div>
        
    )


}

export default TmpAfterReg;