import React, {useState} from "react";

function TmpAfterReg(){

    const[newEmail, setNewEmail] = useState();

    function sendEmail(emailAddress){
        console.log("blablabla");
    }

    return(
        <div>
            <div>
            שלום!
            הצעת מחיר נשלחה לכתובת המייל שהזנת ברישום
            </div>
            <button>להזנת כתובת אחרת לשליחת הצעת מחיר </button>
            <input type="email" onChange={(e)=> setNewEmail(e.target.value) } />
            <button onClick={()=>sendEmail(newEmail)} >אישור</button>

            <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a>
            {/* //inlineBlock */}
        </div>
        
    )


}

export default TmpAfterReg;