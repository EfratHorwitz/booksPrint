import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import { useHistory } from "react-router-dom"
import axios from "axios";
import { saveBookDetails } from '../actions/saveBookDetails';
import { saveOrderDetails } from '../actions';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import image26 from '../assets/26.png';
import image27 from '../assets/27.png';
// import swal from 'sweetalert';



function CompleteOrder(props) {
    debugger;
    const [orderToInsert, setOrderToInsert] = useState();
    const [userToUpdate, setUserToUpdate] = useState();
    debugger;
    let history = useHistory();

    function finishedOrder() {
        postOrder();
        history.push("/goodby");
    }

    useEffect(() => {
        // let bookid = localStorage.getItem('bookId');
        // if(bookid){
        //     props.saveBookDetails('')
        // }
        //  ;
        setOrderToInsert({            
            bookId: localStorage.getItem('bookId'),
            userId: props.currentUser._id,
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
            // {orderStatus: "trial"})            
            // bookId: localStorage.getItem('bookId'),
            // userId: props.currentUser._id,
            // // orderDate: new Date(),
            // // orderStatus: "new",
            // orderPrice: props.currentBook.price

            .then((res) => {
                props.saveOrderDetails(res.data);
                // finishedOrder();
                console.log("cons from postOrder", res.data.order);
                //localStorage.setItem('token', JSON.stringify(res.data.token))
            })
            .catch((err) => { console.log("error: ", err) });
        debugger;
    }

    function c() {
        // swal({
        //     title: "קובץ הכריכה עלה בהצלחה",
        //     text: "",
        //     icon: "success",
        // });
    }
    function d() {
        // swal({
        //     title: "קובץ הפנים עלה בהצלחה",
        //     text: "",
        //     icon: "success",
        // });
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
            <img src={image26} style={{
                width: '90%',
                marginLeft: '110px',
            }} />
            <div style={{textAlign:'center'}}>
                <Button variant="contained" component="label" size="large" style={{ backgroundColor: "#2A3B8F", color: '#FFA259' }} onChange={c}>קובץ כריכת הספר <input type="file" hidden /></Button>
                <Button variant="contained" component="label" size="large" style={{ backgroundColor: "#2A3B8F", color: '#FFA259' }} onChange={d}>קובץ פנים הספר <input type="file" hidden /></Button>
                <br /><br /><br />
                {/* <Button type="button" variant="contained" style={{ backgroundColor: "#FFA259", color: '#2A3B8F' }} size="large" onClick={finishedOrder}>לסיום הזמנה</Button> */}
            </div>
            <img src={image27} style={{
                width: '90%',
                marginLeft: '110px',
            }} onClick={finishedOrder}/>
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
export default connect(mapStateToProps, { saveOrderDetails })(CompleteOrder);