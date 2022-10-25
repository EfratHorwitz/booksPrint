// 'bookId' : Number,
// 	'userId' : {type:mongoose.Types.ObjectId, ref:'user' },
// 	'orderDate' : Date,
// 	'orderStatus' : String,
// 	'orderPrice' : Number,
// 	'comments' : String
const initialState = {
    // bookId: 0,    
    // userId: 0,
    // orderDate: "",
    // orderStatus: "",
    // orderPrice: 0,
    // id: 0,
    // comments:"",
    id: 0
}

export default (state=initialState, action) => {
    if(action.type === "SAVE_ORDER"){
        return {...state, ...action.payload};
    }
    return state;
}