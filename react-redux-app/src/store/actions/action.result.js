import * as actionType from './actiontypes';
/**
 * action creators 
 *  */
const saveResult = (value) => {
    return {
        type:actionType.STORERESULT,
        payload:{value:value}
    }
}

export const storeResult = (value) => {
    return ( dispatch , getState ) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(value));
        },2000);
    }
}
export const deleteResult = (id) => {
    return {
        type:actionType.DELETERESULT,
        payload:{id}
    }
}
export const clearStoredResult = (id) => {
    return {
        type:actionType.CLEARSTOREDRESULT
    }
}