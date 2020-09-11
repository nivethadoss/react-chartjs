import {FETCH_PTUID_START, FETCH_PTUID_SUCCESS, FETCH_PTUID_FAILURE} from './ptuIdTypes'
import axios from 'axios'

export const fetchPtuidStart = () => {
    return {
        type: FETCH_PTUID_START
    }
}

export const fetchPtuidSuccess = (data) => {
    return {
        type: FETCH_PTUID_SUCCESS,
        payload: data

    }
}

export const fetchPtuidFailure = (error) => {

    return {

        type: FETCH_PTUID_FAILURE,
        payload: error
    }
}

//export const fetchDataLine = async(dispatch,schemaid) => {
export const fetchDataPtu = async(dispatch) => {
    dispatch(fetchPtuidStart())
    try{
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        let response = await axios.get('http://127.0.0.1:5000/ptu_serial')
        let datas = response.data
        let ptu = []

        datas.forEach(data => {

            ptu.push(data[0])            
        });

        let modified_data = {
            
            ptu: ptu,
        }
        
        dispatch(fetchPtuidSuccess(modified_data))
    
    
    }catch(error) {
                                                                                                                                      
        console.log(error)
    }
}
