import {FETCH_BAR_START, FETCH_BAR_SUCCESS, FETCH_BAR_FAILURE} from "./pieTypes"
import axios from 'axios'


export const fetchBarStart = () => {
    return {
        type: FETCH_BAR_START
    }
}

export const fetchBarSuccess = (data) => {
    return {
        type: FETCH_BAR_SUCCESS,
        payload: data
    }
}

export const fetchBarFailure = (error) => {
    return {
        type: FETCH_BAR_FAILURE,
        payload: error
    }
}

export const fetchDataNew = async(dispatch) => {
    dispatch(fetchBarStart())
    try {
        let response = await axios.get("http://127.0.0.1:5000/test?id=5dfccfc2e46580a4c4505c150a513389")
        let datas = response.data
        console.log(datas)

    }catch (error) {

    }

}