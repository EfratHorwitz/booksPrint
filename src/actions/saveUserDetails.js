
export const saveUserDetails = (user) => {
    return function (dispatch){
        dispatch({type:"SAVE_USER", payload:user});
    }
}