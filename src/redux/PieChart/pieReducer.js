import {FETCH_PIE_START, FETCH_PIE_SUCCESS, FETCH_PIE_FAILURE} from './pieTypes'

const initialState = {
    loading: false,
    data: {},
    error: 'No Error'
}


const pieReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_PIE_START:
            return {
                ...state,
                loading: true
            }

        case FETCH_PIE_SUCCESS:

            return {
                ...state,
                data: action.payload,
                loading: false
            }

        case FETCH_PIE_FAILURE:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        default: return state
    }
}

export default pieReducer