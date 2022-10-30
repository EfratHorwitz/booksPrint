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
//  ;
    const [orderToInsert, setOrderToInsert] = useState();
    const [userToUpdate, setUserToUpdate] = useState();
    //  ;
    let history = useHistory();

    function finishedOrder() {
        postOrder();
        history.push("/goodby");
    }
    
    useEffect(()=>{
        // let bookid = localStorage.getItem('bookId');
        // if(bookid){
        //     props.saveBookDetails('')
        // }
        //  ;
        setOrderToInsert({            
            bookId: localStorage.getItem('bookId'),
            userId: localStorage.getItem('userid'),
            // orderDate: new Date(),
            orderStatus: "real!!!!",
            orderPrice: props.currentBook.price
        })
        //  
        // setUserToUpdate(props.currentUser)
        //  ;
    }, [])
 ;
    let curId = props.currentUser._id;
     ;

    function postOrder(){
         ;
        let newOrders = props.currentUser.orders;
         
        newOrders.push(orderToInsert);
        props.currentUser.orders = newOrders;
         ;
        // let newUser = {
        //     fullname: props.currentUser.fullname,
        //     username: props.currentUser.username,
        //     password: props.currentUser.password,
        //     email: props.currentUser.email,
        //     orders: props.currentUser.orders,
        // }
        
        // axios.put("http://localhost:4000/user/635af4e664f1ddf01622023f", newUser)
        axios.post("http://localhost:4000/order", orderToInsert)
        // 635af4e664f1ddf01622023f
        .then((res)=> {props.saveOrderDetails(res.data);
        // console.log("cons from postOrder", res.data.order); 
        })
        .catch((err) => { console.log("error: ", err) });        
    }

    // axios.post("http://localhost:4000/order", orderToInsert)
    // // {orderStatus: "trial"})            
    //     // bookId: localStorage.getItem('bookId'),
    //     // userId: props.currentUser._id,
    //     // // orderDate: new Date(),
    //     // // orderStatus: "new",
    //     // orderPrice: props.currentBook.price
    
    // .then((res)=> {props.saveOrderDetails(res.data);
    //     // finishedOrder();
    //     console.log("cons from postOrder", res.data.order); 
    // //localStorage.setItem('token', JSON.stringify(res.data.token))
    // })
    // .catch((err) => { console.log("error: ", err) });
    //  ;

    return (
        
        <div>
        
            <Button type="button" variant="contained" color="primary" size="large">שמירת קובץ פנים הספר</Button>
            <Button type="button" variant="contained" color="primary" size="large">שמירת קובץ כריכת הספר</Button>
            {/* <button onClick={plaster}></button> */}
            <Button type="button" variant="contained" color="primary" size="large" onClick={finishedOrder}>לסיום הזמנה</Button>    
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentBook: state.book,
        currentUser: state.user
    };
};

// export default CompleteOrder;
export default connect(mapStateToProps, {saveOrderDetails})(CompleteOrder);