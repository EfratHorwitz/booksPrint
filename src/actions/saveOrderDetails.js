// import React from 'react';

export const saveOrderDetails = (order) => { 
    console.log("saveOrderDetails action:  ", order);
    return function (dispatch){
        dispatch({type:"SAVE_ORDER", payload:order});
    }
}

