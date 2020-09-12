import {FETCH_MANUFACTURE_START, FETCH_MANUFACTURE_SUCCESS, FETCH_MANUFACTURE_FAILURE} from './manuTypes'
import axios from 'axios'

export const fetchManuStart = () => {
    return {
        type: FETCH_MANUFACTURE_START
    }
}

export const fetchManuSuccess = (data) => {
    return {
        type: FETCH_MANUFACTURE_SUCCESS,
        payload: data

    }
}

export const fetchManuFailure = (error) => {

    return {

        type: FETCH_MANUFACTURE_FAILURE,
        payload: error
    }
}

//export const fetchDataLine = async(dispatch,schemaid) => {
export const fetchDataManu = async(dispatch) => {
    dispatch(fetchManuStart())
    try{
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        let response = await axios.get('http://127.0.0.1:5000/manufacturer')
        let datas = response.data
        let manu = []


        datas.forEach(data => {

            manu.push(data[0])            
        });
        let modified_data = {
            
            manu: manu,
        }
        
        dispatch(fetchManuSuccess(modified_data))
    
    
    }catch(error) {
                                                                                                                                      
        console.log(error)
    }
}
