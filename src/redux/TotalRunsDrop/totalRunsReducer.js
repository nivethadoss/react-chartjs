import {FETCH_TOTALRUNS_START, FETCH_TOTALRUNS_SUCCESS, FETCH_TOTALRUNS_FAILURE} from './totalRunsTypes'


const initialState = {
    loading: false,
    data: {},
    error: 'No error'
}

const runsReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_TOTALRUNS_START:
            return {
                ...state,
                loading: true
            }

        case FETCH_TOTALRUNS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_TOTALRUNS_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state
     }

} 

export default runsReducer