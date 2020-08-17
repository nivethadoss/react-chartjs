import {FETCH_LINE_START, FETCH_LINE_SUCCESS, FETCH_LINE_FAILURE} from './lineTypes'
import axios from 'axios'

export const fetchLineStart = () => {
    return {
        type: FETCH_LINE_START
    }
}

export const fetchLineSuccess = (data) => {
    return {
        type: FETCH_LINE_SUCCESS,
        payload: data

    }
}

export const fetchLineFailure = (error) => {

    return {

        type: FETCH_LINE_FAILURE,
        payload: error
    }
}

export const fetchDataLine = async(dispatch,schemaid) => {
    dispatch(fetchLineStart())
    try{
        let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        let datas = response.data
        let date = []
        let count = []
        datas.forEach(data => {

            date.push(data[0])
            count.push(data[1])
            
        });
        let modified_data = {
            date: date,
            count: count
        }
        console.log(date, count)
        
        dispatch(fetchLineSuccess(modified_data))
    
    
    }catch(error) {

    }
}