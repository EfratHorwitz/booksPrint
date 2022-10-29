import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SelectGeneric from './selectGeneric';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function MyOrders() {

    /*
     const[paperTypes, setPaperTypes] = useState([]);

    function getPaperTypes(){        
        axios.get("http://localhost:4000/papertypes")
        // .then(res => {bindingTypes = res.data}) 
        .then(res => {setPaperTypes(res.data)})
        .then(()=>{console.log("paperType"); debugger;})
        .catch(err => { console.log("error:" , err)})
    }
    */
    const [myOrders, setMyOrders] = useState([]);

    function getMyOrders() {
        debugger;
        axios.get("http://localhost:4000/order")
            // .then(res => {bindingTypes = res.data}) 
            .then(res => { setMyOrders(res.data) })
            // .then(()=>{console.log("conslog", myOrders)})
            .catch(err => { console.log("error:", err) })
    }

    useEffect(() => {
        getMyOrders()
    }, []);

    useEffect(() => {
        console.log("$myOrders", myOrders);
    }, [myOrders]);

    return (
        <div>
            MyOrders component
            <ul>
            {myOrders.map(oo=><li>{oo._id} {oo.orderStatus}</li>)}
            </ul>
            {/* <SelectGeneric dataList = {myOrders} descStr = "paperType" myTitle = "ההזמנות שלי" /> */}
        </div>
    )
}
export default MyOrders;