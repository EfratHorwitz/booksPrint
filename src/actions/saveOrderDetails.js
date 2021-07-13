// import React from 'react';

export const saveOrderDetails = (order) => { 
    console.log("reducer", order);
    return function (dispatch){
        dispatch({type:"SAVE_ORDER", payload:order});
    }
}

