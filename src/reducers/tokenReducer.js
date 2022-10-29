const initialState = {
    token: ""
}

export default (state = initialState, action) => {
    // console.log("ACTION", action);
    if (action.type === "SAVE_TOKEN") {
        return { ...state, ...action.payload };
    }
    return state;
}
