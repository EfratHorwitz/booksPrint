const initialState = {
    size: 0,
    color: "",
    format: "",
    pagesNum: 0,
    paperType: "",
    quantity: 0,
    bindingType: ""
}

export default (state = initialState, action) => {
    // console.log("ACTION", action);
    if (action.type === "SAVE_ORDER") {
        return { ...state, ...action.payload };
    }
    return state;
}
