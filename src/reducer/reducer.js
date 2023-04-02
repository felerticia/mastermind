import actionTypes from "./actionTypes";
export const reducer = (state, action) => {

    switch (action.type) {

        case actionTypes.SET_COLOR : {
            return {
                ...state,
                currentColor : action.payload
            }
        } 

        default : 
            return state
    }
};
