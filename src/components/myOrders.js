import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SelectGeneric from './selectGeneric';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import {connect} from 'react-redux';
import {saveOrderDetails} from '../actions/saveOrderDetails';

function MyOrders(props) {

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
        let curUId = localStorage.getItem("userid");
        // axios.get(`http://localhost:4000/user/${curUId}`)
        //     // .then(res => {bindingTypes = res.data}) 
        //     .then(res => { setMyOrders(res.data.orders) })
        //     // .then(()=>{console.log("conslog", myOrders)})
        //     .catch(err => { console.log("error:", err) })

        axios.get(`http://localhost:4000/order?userId=${curUId}`)
        .then((res)=>{setMyOrders(res.data)})
        .catch((err)=>{console.log(err)})
    }

    // useEffect(() => {
    //     getMyOrders()
    // }, []);

    // useEffect(() => {
    //     console.log("$myOrders", myOrders);
    // }, [myOrders]);

    useEffect(()=>{
        getMyOrders()
    })

    return (
        <div>
            MyOrders component
            <ul>
            {myOrders.map(oo=><li>{oo._id} {oo.orderStatus}</li>)}            
            </ul>
            <button type='button' onClick={getMyOrders} ></button>
            {/* <SelectGeneric dataList = {myOrders} descStr = "paperType" myTitle = "ההזמנות שלי" /> */}
        </div>
    )
}
// export default MyOrders;
const mapStateToProps = (state) => {
    return {
        // currentBook: state.book,
        currentUser: state.user
    };
};

// export default CompleteOrder;
export default connect(mapStateToProps, {saveOrderDetails})(MyOrders);
