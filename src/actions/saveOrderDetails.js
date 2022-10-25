
export const saveOrderDetails = (order) => {
    console.log("console from saveOrderDetails", order);
    return function (dispatch){
        debugger;
        dispatch({type:"SAVE_ORDER", payload:order});
        debugger;
    }
}