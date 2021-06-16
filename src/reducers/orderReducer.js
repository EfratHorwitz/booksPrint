const initialState = {
    size: 0,
    color: "",
    format: "",
    pagesNum: 0,
    paperType:"",
    quantity: 0
    //...
}

export const orderReducer = (state = initialState, action)=>{
    if(action.type === "SAVE_ORDER"){
        return {...state,...action.payload};
    }
    return state;
}
