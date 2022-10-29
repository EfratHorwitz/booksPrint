import React, {useEffect, useState} from 'react';
import axios from 'axios';

function MyProposals(){
    
    const [myProposals, setmyProposals] = useState([]);
    
    function getMyProposals() {
        debugger;
        axios.get("http://localhost:4000/book")
            // .then(res => {bindingTypes = res.data}) 
            .then(res => { setmyProposals(res.data) })
            // .then(()=>{console.log("conslog", myOrders)})
            .catch(err => { console.log("error:", err) })
    
    }
    useEffect(() => {
        getMyProposals()
    }, []);

    useEffect(() => {
        console.log("$myProposals", myProposals);
    }, [myProposals]);

    
    return(
        <div>
            MyProposals component
            <ul>
            {myProposals.map(p=><li>{p._id}</li>)}
            </ul>
        </div>
    )
}
export default MyProposals;
