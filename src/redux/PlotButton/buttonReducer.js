import {FETCH_BUTTON_START, FETCH_BUTTON_SUCCESS, FETCH_BUTTON_FAILURE} from './buttonTypes'


const initialState = {
    loading: false,
    data: {},
    error: 'No error'
}

const buttonReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_BUTTON_START:
            return {
                ...state,
                loading: true
            }

        case FETCH_BUTTON_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_BUTTON_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state
     }

} 

export default buttonReducer