
export const saveUserDetails = (user) => {
    console.log("console from saveUserDetails", user);
    localStorage.setItem("userid", user._id);
    return function (dispatch){
        debugger;
        dispatch({type:"SAVE_USER", payload:user});
        debugger;
    }
}