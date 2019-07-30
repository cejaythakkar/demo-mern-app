import * as actionType from './actiontypes';
/*
    Action Creators
*/
export const increment = () => {
    return {
        type:actionType.INCREMENT
    }
}
export const decrement = () => {
    return {
        type:actionType.DECREMENT
    }
}
export const add = (value) => {
    return {
        type:actionType.ADD,
        payload:{value:value}
    }
}
export const subtract = (value) => {
    return {
        type:actionType.SUBTRACT,
        payload:{value:value}
    }
}
export const resetCounter = (value) => {
    return {
        type:actionType.RESET_COUNTER,
    }
}