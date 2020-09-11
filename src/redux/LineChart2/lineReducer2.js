import {FETCH_LINE2_START, FETCH_LINE2_SUCCESS, FETCH_LINE2_FAILURE} from './lineTypes2'


const initialState = {
    loading: false,
    data: {},
    error: 'No error'
}

const lineReducer2 = (state = initialState, action) => {
    switch(action.type){

        case FETCH_LINE2_START:
            return {
                ...state,
                loading: true
            }

        case FETCH_LINE2_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_LINE2_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state
     }

} 

export default lineReducer2