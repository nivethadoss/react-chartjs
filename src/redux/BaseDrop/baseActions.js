import {FETCH_BASESTATION_START, FETCH_BASESTATION_SUCCESS, FETCH_BASESTATION_FAILURE} from './baseTypes'
import axios from 'axios'

export const fetchBaseStart = () => {
    return {
        type: FETCH_BASESTATION_START
    }
}

export const fetchBaseSuccess = (data) => {
    return {
        type: FETCH_BASESTATION_SUCCESS,
        payload: data

    }
}

export const fetchBaseFailure = (error) => {

    return {

        type: FETCH_BASESTATION_FAILURE,
        payload: error
    }
}

//export const fetchDataLine = async(dispatch,schemaid) => {
export const fetchDataBase = async(dispatch) => {
    dispatch(fetchBaseStart())
    try{
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        let response = await axios.get('http://127.0.0.1:5000/base_stations')
        let datas = response.data
        let base = []

        datas.forEach(data => {

            base.push(data[0])            
        })

        let modified_data = {
            
            base:base,
        }
        
        dispatch(fetchBaseSuccess(modified_data))
    
    
    }catch(error) {
                                                                                                                                      
        console.log(error)
    }
}
