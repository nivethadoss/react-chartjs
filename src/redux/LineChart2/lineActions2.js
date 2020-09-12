import {FETCH_LINE2_START, FETCH_LINE2_SUCCESS, FETCH_LINE2_FAILURE} from './lineTypes2'
import axios from 'axios'

export const fetchLine2Start = () => {
    return {
        type: FETCH_LINE2_START
    }
}

export const fetchLine2Success = (data) => {
    return {
        type: FETCH_LINE2_SUCCESS,
        payload: data

    }
}

export const fetchLine2Failure = (error) => {

    return {

        type: FETCH_LINE2_FAILURE,
        payload: error
    }
}

   
// for linechart2 components
export const fetchDataLine2 = async(dispatch) => {
    dispatch(fetchLine2Start())
    try{
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        let response = await axios.get('http://127.0.0.1:5000/ptu_limit?limit=10')
        let datas = response.data
        let date = []
        let ratio = []
   
        datas.forEach(data => {

            ratio.push(data[1])
            date.push(data[2])
            
        });
        let modified_data2 = {
            
            ratio: ratio,
            date: date
        }
      
        
        dispatch(fetchLine2Success(modified_data2))
    
    
    }catch(error) {
                                                                                                                                      
        console.log(error)
    }
}


