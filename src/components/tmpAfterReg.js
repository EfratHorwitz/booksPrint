import React, { useState } from "react";
import PriceProposal from './priceProposal';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
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
            <div style={{ textAlign: 'center' }}>
                :שלום הצעת המחיר שלך בהתאם לפרטים שהזנת היא
            </div>
            {/* <button style={{ color: '#2A3B8F', backgroundColor: '#FFA259', textAlign: 'center', marginLeft: '45%' }} type="button" onClick={finishOrder} >?מעוניין להמשיך לביצוע הזמנה</button> */}
            <Button variant="contained" size="large" onClick={finishOrder} style={{backgroundColor: "#FFA259",color: '#2A3B8F',marginLeft: '45%'}}>
            ?מעוניין להמשיך לביצוע הזמנה
            </Button>
            <br />
            <img src={image25} style={{
                width: '65%',
                // marginLeft: '110px',
                // marginTop: '20px'
            }} />
        </>

    )


}

export default TmpAfterReg;