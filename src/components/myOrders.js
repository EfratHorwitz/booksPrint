import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SelectGeneric from './selectGeneric';

function MyOrders(){

    const[myOrders, setMyOrders] = useState([]);

    function getMyOrders(){        
        axios.get("http://localhost:4000/order")
        // .then(res => {bindingTypes = res.data}) 
        .then(res => {setMyOrders(res.data)})
        .catch(err => { console.log("error:" , err)})
    }

    useEffect(()=>{
        getMyOrders()        
    },[]);

    useEffect(()=>{
        console.log("$myOrders", myOrders);       
    },[myOrders]);

    return(
        <div>
            MyOrders component
            <SelectGeneric dataList = {myOrders} descStr = "paperType" myTitle = "ההזמנות שלי" />
        </div>
    )
}
export default MyOrders;