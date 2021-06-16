import React from 'react';

export const saveOrderDetails = (order) => {
    return function (dispatch){
        dispatch({type:"SAVE_ORDER", payload:order});
    }
}

