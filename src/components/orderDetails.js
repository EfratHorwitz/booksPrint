import React from 'react';
import {useState} from 'react';
import Button from '@material-ui/core/Button';

function OrderDetails({order}) {

    const [orderToShow, setOrderToShow] = useState();

    orderToShow.setOrderToShow(order);

    return (
        <div>
            <label>
            {orderToShow.bookId}
            </label>
            <label>
            {orderToShow.orderId}
            </label>
            <label>
            {orderToShow.userId}
            </label>
            <label>
            {orderToShow.orderDate}
            </label>
            <label>
            {orderToShow.status}
            </label>
            <label>
            {orderToShow.orderPrice}
            </label>
            <label>
            {orderToShow.deadLine}
            </label>

            <Button variant="contained" color="primary" size="large"> עדכון סטטוס הזמנה</Button>

           
        </div>
    )

}

export default OrderDetails;