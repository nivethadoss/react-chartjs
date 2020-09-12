import {FETCH_MANUFACTURE_START, FETCH_MANUFACTURE_SUCCESS, FETCH_MANUFACTURE_FAILURE} from './manuTypes'


const initialState = {
    loading: false,
    data: {},
    error: 'No error'
}

const manuReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_MANUFACTURE_START:
            return {
                ...state,
                loading: true
            }

        case FETCH_MANUFACTURE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_MANUFACTURE_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state
     }

} 

export default manuReducer