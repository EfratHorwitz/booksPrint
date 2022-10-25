const initialState = {
    fullname: "",    
    phone: 0,
    email: "",
    username: "",
    password: "",
    id: 0
}

export default (state=initialState, action) => {
    if(action.type === "SAVE_USER"){
        return {...state, ...action.payload};
    }
    return state;
}