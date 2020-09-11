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

//export const fetchDataLine = async(dispatch,schemaid) => {
export const fetchDataLine = async(dispatch) => {
    dispatch(fetchLineStart())
    try{
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        let response = await axios.get('http://127.0.0.1:5000/ptus')
        let datas = response.data
        let date = []
        let ratio = []
        console.log(datas)
        datas.forEach(data => {

            ratio.push(data[1])
            date.push(data[2])
            
        });
        let modified_data = {
            
            ratio: ratio,
            date: date
        }
        console.log(ratio, date)
        
        dispatch(fetchLineSuccess(modified_data))
    
    
    }catch(error) {
                                                                                                                                      
        console.log(error)
    }
}



// for linechart2 components
export const fetchDataLine2 = async(dispatch) => {
    dispatch(fetchLineStart())
    try{
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        let response = await axios.get('http://127.0.0.1:5000/ptu_limit?limit=10')
        let datas = response.data
        let date = []
        let ratio = []
        console.log(datas)
        datas.forEach(data => {

            ratio.push(data[1])
            date.push(data[2])
            
        });
        let modified_data2 = {
            
            ratio: ratio,
            date: date
        }
        console.log(ratio, date)
        
        dispatch(fetchLineSuccess(modified_data2))
    
    
    }catch(error) {
                                                                                                                                      
        console.log(error)
    }
}


