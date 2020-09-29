import {SET_EDATE} from './endDateTypes'

const initialState = {
    data: new Date(),
}

const endDateReducer = (state = initialState, action) => {
    switch(action.type){        
        case SET_EDATE:
            return {
                ...state,
                data: action.payload
                }

        default: return state
     }

} 

export default endDateReducer