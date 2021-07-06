const initialState = {
    firstName: "",
    lastName: "",
    phone: 0,
    email: "",
    username: "",
    password: ""
}

export default (state=initialState, action) => {
    if(action.type === "SAVE_USER"){
        return {...state, ...action.payload};
    }
    return state;
}