import actionTypes from "./actionTypes";
export const reducer = (state, action) => {

    switch (action.type) {

        case actionTypes.GENERATE_CANDIDATE_MOVES : {
            const {candidateMoves} = action.payload
            return {
                ...state,
                candidateMoves
            }
        } 

        default : 
            return state
    }
};
