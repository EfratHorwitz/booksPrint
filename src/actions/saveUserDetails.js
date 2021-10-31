
export const saveUserDetails = (user) => {
    console.log("console from saveUserDetails");
    return function (dispatch){
        dispatch({type:"SAVE_USER", payload:user});
    }
}