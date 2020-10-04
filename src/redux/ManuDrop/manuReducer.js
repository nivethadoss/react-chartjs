import {FETCH_MANUFACTURE_START, FETCH_MANUFACTURE_SUCCESS, 
    FETCH_MANUFACTURE_FAILURE,
    SET_SELECTED_MANU} from './manuTypes'


const initialState = {
    loading: false,
    data: {},
    selected: 'K2_000028-02',
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

        case SET_SELECTED_MANU:
            return {
                ...state,
                selected: action.payload
            }


        default: return state
     }

} 

export default manuReducer