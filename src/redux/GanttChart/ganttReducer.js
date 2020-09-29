import {FETCH_GANTT_START, FETCH_GANTT_SUCCESS, FETCH_GANTT_FAILURE} from './ganttTypes';


const initialState = {
    loading: false,
    data: {},
    error: 'No error'
}


const ganttReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_GANTT_START:
            return {
                ...state,
                loading: true
            }

        case FETCH_GANTT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_GANTT_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state
     }

} 

export default ganttReducer