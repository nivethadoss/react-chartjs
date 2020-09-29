import {FETCH_PIE_START, FETCH_PIE_SUCCESS, FETCH_PIE_FAILURE} from "./pieTypes"
import axios from 'axios'


export const fetchPieStart = () => {
    return {
        type: FETCH_PIE_START
    }
}

export const fetchPieSuccess = (data) => {
    return {
        type: FETCH_PIE_SUCCESS,
        payload: data
    }
}

export const fetchPieFailure = (error) => {
    return {
        type: FETCH_PIE_FAILURE,
        payload: error
    }
}

export const fetchDataPie = async(dispatch, schemaid) => {
    dispatch(fetchPieStart())
    try {

        let response = await axios.get (`http://127.0.0.1:5000/test?id=${schemaid}`)
        let datas = response.data
        let modified_data = {
            schema_id: datas[0],
            Number_of_false: datas[1],
            Number_of_true: datas[2]
        }
        dispatch(fetchPieSuccess(modified_data))

    }catch (error) {

    }

}