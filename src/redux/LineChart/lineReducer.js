import {FETCH_LINE_START, FETCH_LINE_SUCCESS, FETCH_LINE_FAILURE} from './lineTypes'
import { findAllByTestId } from '@testing-library/react'

const initialState = {
    loading: false,
    data: {},
    error: 'No error'
}

const lineReducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_LINE_START:
            return {
                ...state,
                loading: true
            }

        case FETCH_LINE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case FETCH_LINE_FAILURE:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state
     }

} 

export default lineReducer