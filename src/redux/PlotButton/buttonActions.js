
import {FETCH_BUTTON_START, FETCH_BUTTON_SUCCESS, FETCH_BUTTON_FAILURE} from './buttonTypes'
import axios from 'axios'

export const fetchButtonStart = () => {
    return {
        type: FETCH_BUTTON_START
    }
}

export const fetchButtonSuccess = (data) => {
    return {
        type: FETCH_BUTTON_SUCCESS,
        payload: data

    }
}

export const fetchButtonFailure = (error) => {

    return {

        type: FETCH_BUTTON_FAILURE,
        payload: error
    }
}

