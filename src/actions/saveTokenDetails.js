// import React from 'react';

export const saveTokenDetails = (token) => { 
    console.log("saveTokenDetails action:  ", token);
    return function (dispatch){
        dispatch({type:"SAVE_TOKEN", payload:token});
    }
}

