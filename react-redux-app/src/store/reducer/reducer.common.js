import { SETLOADING } from '../actions/actiontypes';
const initialState = {
    isloading : false
}

export default ( state = initialState , action ) => {
    switch(action.type){
        case SETLOADING:
            return {
                ...state,
                isloading : action.value
            }
        default:
            return state;
    }
}