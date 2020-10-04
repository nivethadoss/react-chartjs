import {FETCH_PTUID_START, FETCH_PTUID_SUCCESS, FETCH_PTUID_FAILURE, SET_SELECTED_PTU} from './ptuIdTypes'


const initialState = {
    loading: false,
    data: {},
    selected: null,
    error: 'No error'
}

const ptuReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_PTUID_START:
            return {
                ...state,
                loading: true
            }

        case FETCH_PTUID_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_PTUID_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case SET_SELECTED_PTU:
            return {
                ...state,
                selected: action.payload
            }

        default: return state
     }

} 

export default ptuReducer