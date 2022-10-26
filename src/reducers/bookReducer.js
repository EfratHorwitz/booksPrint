const initialState = {
    bookType: "",
    size: 0,
    color: "",
    format: "",
    pagesNum: 0,
    paperType: "",
    quantity: 0,
    bindingType: "",
    attribute : "",
    price: 0,
    id: 0
}

export default (state = initialState, action) => {
    // console.log("ACTION", action);
    if (action.type === "SAVE_BOOK") {
        return { ...state, ...action.payload };
    }
    return state;
}


// const initialState = {
//     bookType: "",
//     size: 0,
//     color: "",
//     format: "",
//     pagesNum: 0,
//     paperType: "",
//     quantity: 0,
//     bindingType: "",
//     attribute : ""
// }

// export default (state = initialState, action) => {
//     // console.log("ACTION", action);
//     if (action.type === "SAVE_ORDER") {
//         return { ...state, ...action.payload };
//     }
//     return state;
// }

