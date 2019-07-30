import * as ActionType from "../actions/actiontypes";

const initialState = {
    result : []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.STORERESULT:
            return {
                ...state,
                result : state.result.concat({id:new Date(),value:action.payload.value})
            }
        case ActionType.DELETERESULT:
            return {
                ...state,
                result : state.result.filter(item => item.id !== action.payload.id)
            }
        case ActionType.CLEARSTOREDRESULT:
            return {
                ...state,
                result : []
            }
    }
    return state;
}

export default reducer;