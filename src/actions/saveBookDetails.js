// import React from 'react';

export const saveBookDetails = (book) => { 
    console.log("saveBookDetails action:  ", book);
    return function (dispatch){
        dispatch({type:"SAVE_BOOK", payload:book});
    }
}

// // import React from 'react';

// export const saveBookDetails = (order) => { 
//     console.log("saveBookDetails action:  ", order);
//     return function (dispatch){
//         dispatch({type:"SAVE_ORDER", payload:order});
//     }
// }

