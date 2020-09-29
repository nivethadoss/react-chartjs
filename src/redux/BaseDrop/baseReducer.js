import {FETCH_BASESTATION_START, FETCH_BASESTATION_SUCCESS, FETCH_BASESTATION_FAILURE} from './baseTypes';


const initialState = {
    loading: false,
    data: {},
    error: 'No error'
}

const baseReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_BASESTATION_START:
            return {
                ...state,
                loading: true
            }

        case FETCH_BASESTATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_BASESTATION_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state
     }

} 

export default baseReducer