import React, {useEffect, useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import { useHistory } from "react-router-dom"
import axios from "axios";
import {saveBookDetails} from '../actions/saveBookDetails';
import { saveOrderDetails } from '../actions';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

function CompleteOrder(props) {
debugger;
    const [orderToInsert, setOrderToInsert] = useState({'comment':'trying to post order'});
    debugger;
    let history = useHistory();

    function finishedOrder() {
        history.push("/goodby");
    }
    // 'bookId' : Number,
	// 'userId' : {type:mongoose.Types.ObjectId, ref:'user' },
	// 'orderDate' : Date,
	// 'orderStatus' : String,
	// 'orderPrice' : Number,
	// 'comments' : String
    // let orderExmp = {
    //     'comments':"trying to post order"
    // }
    // function plaster(){
    //     debugger;
    //     setOrderToInsert({...orderToInsert, ...orderExmp})
    //     debugger;
    // }

    useEffect(()=>{
        setOrderToInsert({comments: "monday night"});
        debugger;
    },[])

    function postOrder(){
        debugger;
        axios.post("http://localhost:4000/order", orderToInsert)
        .then((res)=> {props.saveOrderDetails(res.data); finishedOrder(); console.log(res.data.order); 
        //localStorage.setItem('token', JSON.stringify(res.data.token))
        })
        .catch((err) => { console.log("error: ", err) });
        debugger;
    }

    return (
        <div>
            <Button variant="contained" color="primary" size="large">שמירת קובץ פנים הספר</Button>
            <Button variant="contained" color="primary" size="large">שמירת קובץ כריכת הספר</Button>
            {/* <button onClick={plaster}></button> */}
            <Button variant="contained" color="primary" size="large" onClick={postOrder}>לסיום הזמנה</Button>    
        </div>
    )
}
// export default CompleteOrder;
export default connect(null, {saveOrderDetails})(CompleteOrder);