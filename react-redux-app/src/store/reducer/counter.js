import * as ActionType from "../actions/actiontypes";

const initialState = {
    counter:0
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.INCREMENT:
            return {
                ...state,
                counter : state.counter + 1
            }
        case ActionType.DECREMENT:
            return {
                ...state,
                counter : state.counter - 1
            }
        case ActionType.ADD:
            return {
                ...state,
                counter : state.counter + action.payload.value
            }
        case ActionType.SUBTRACT:
            return {
                ...state,
                counter : state.counter - action.payload.value
            }
        case ActionType.RESET_COUNTER:
            return {
                ...state,
                counter : 0
            }
    }
    return state;
}

export default reducer;