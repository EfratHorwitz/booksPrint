
export const saveOrderDetails = (order) => {
    console.log("console from saveOrderDetails", order);
    return function (dispatch){
         ;
        dispatch({type:"SAVE_ORDER", payload:order});
         ;
    }
}