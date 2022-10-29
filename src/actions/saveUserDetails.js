
export const saveUserDetails = (user) => {
    console.log("console from saveUserDetails", user);
    return function (dispatch){
        debugger;
        dispatch({type:"SAVE_USER", payload:user});
        debugger;
    }
}