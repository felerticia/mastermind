import actionTypes from "./actionTypes"
export const setColor = color => {
    return {
        type: actionTypes.SET_COLOR,
        payload: color
    }
}

export const setSlot = col => {
    return {
        type: actionTypes.SET_SLOT,
        payload: col
    }
}