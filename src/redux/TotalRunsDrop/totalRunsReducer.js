import {FETCH_TOTALRUNS_START, FETCH_TOTALRUNS_SUCCESS, 
    FETCH_TOTALRUNS_FAILURE, SET_SELECTED_RUNS} from './totalRunsTypes'


const initialState = {
    loading: false,
    data: {},
    selected: 100,
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

        case SET_SELECTED_RUNS:
                return {
                    ...state,
                    selected: action.payload
                }
    

        default: return state
     }

} 

export default runsReducer