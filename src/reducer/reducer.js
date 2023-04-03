import actionTypes from "./actionTypes";
export const reducer = (state, action) => {

    switch (action.type) {

        case actionTypes.SET_COLOR : {
            return {
                ...state,
                currentColor : action.payload
            }
        } 

        case actionTypes.SET_SLOT : {
            const row = [...state.rows[state.currentRow]]
            row[action.payload] = state.currentColor
            state.rows[state.currentRow] = [...row]
            return {
                ...state
            }
        } 

        default : 
            return state
    }
};
