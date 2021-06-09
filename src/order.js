import React from 'react';

class Order {

    constructor(bookId,orderId,userId,orderDate,status,orderPrice,deadLine) {
        this.bookId = bookId;
        this.orderId = orderId;
        this.userId = userId;
        this.orderDate = orderDate;
        this.status = status;
        this.orderPrice = orderPrice;
        this.deadLine = deadLine;
    }

}

export default Order;

