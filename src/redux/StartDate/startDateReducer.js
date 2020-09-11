import {SET_SDATE} from './startDateTypes'

const initialState = {
    data: new Date(),
}

const startDateReducer = (state = initialState, action) => {
    switch(action.type){        
        case SET_SDATE:
            return {
                ...state,
                data: action.payload
                }

        default: return state
     }

} 

export default startDateReducer