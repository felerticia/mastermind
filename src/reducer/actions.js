import actionTypes from "./actionTypes"
export const setColor = color => {
    return {
        type: actionTypes.SET_COLOR,
        payload: color
    }
}