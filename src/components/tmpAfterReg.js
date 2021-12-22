import React, {useState} from "react";

function TmpAfterReg(){

    const[newEmail, setNewEmail] = useState();

    function sendEmail(emailAddress){
        console.log("blablabla");
    }

    return(
        <div>
            <div>
            !שלום
            <br/>
            הצעת מחיר נשלחה לכתובת המייל שהזנת ברישום
            </div>
            {/* <button>להזנת כתובת אחרת לשליחת הצעת מחיר </button>
            <input type="email" onChange={(e)=> setNewEmail(e.target.value) } />
            <button onClick={()=>sendEmail(newEmail)} >אישור</button> */}


            {/* <div>
            הכנס כתובת מייל לשינוי כתובת המייל אליה תגיע הצעת המחיר
            </div>
            <input type="email" onChange={(e)=> props.saveUserDetails("email", e.target.value) } />
            {/* <input type="email" onChange={(e)=> setNewEmail(e.target.value) } /> */}
            {/* <button onClick={()=>sendEmail(newEmail)} >לקבלת הצעת מחיר</button>  */}


            {/* <a href="http://localhost:3000/userProfile" style={{display: localStorage.getItem("token")?"inline-block":"none"}} >הפרופיל שלי</a> */}
            {/* //inlineBlock */}
        </div>
        
    )


}

export default TmpAfterReg;