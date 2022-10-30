import {connect} from "react-redux";

import React, {useState} from "react";
import MyOrders from "./myOrders";
import MyProposals from "./myProposals";
import { useEffect } from "react";

function UserProfile(props){

    //  ;
    // const [showOrders, serShowOrders] = useState(false);
    //  ;
    // const [showProposals, setShowProposals] = useState(false);
    //  ;

    // // useEffect(()=>{

    // // },[showOrders])

    // useEffect(()=>{

    // },[showProposals])

    // function showOrdersFunc(){
    //      ;
    //     serShowOrders(true);
    //      ;
    // }
    // function showProposalsFunc(){
    //     setShowProposals(true);
    // }

    return(
        <div>
            Hi from user profile component!  
            {/* <br/>
            <a href="http://localhost:3000/userProfile" onClick={showOrdersFunc} >ההזמנות שלי</a> 
            <br/>
            <a href="http://localhost:3000/userProfile" onClick={showProposalsFunc} >הצעות מחיר שלי</a> */}
            {/* <MyOrders style={{display: showOrders?"inline-block":"none"}} /> 
            <MyProposals style={{display: showProposals?"inline-block":"none"}} /> */}
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        currentUser: state.user
    };
};
export default connect(mapStateToProps)(UserProfile);

// export default UserProfile;