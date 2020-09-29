import {FETCH_TOTALRUNS_START, FETCH_TOTALRUNS_SUCCESS, FETCH_TOTALRUNS_FAILURE} from './totalRunsTypes'
import axios from 'axios'

export const fetchRunsStart = () => {
    return {
        type: FETCH_TOTALRUNS_START
    }
}

export const fetchRunsSuccess = (data) => {
    return {
        type: FETCH_TOTALRUNS_SUCCESS,
        payload: data

    }
}

export const fetchRunsFailure = (error) => {

    return {

        type: FETCH_TOTALRUNS_FAILURE,
        payload: error
    }
}

//export const fetchDataLine = async(dispatch,schemaid) => {
export const fetchDataRuns = async(dispatch) => {
    dispatch(fetchRunsStart())
    try{
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        let response = await axios.get('http://127.0.0.1:5000/total_runs')
        let datas = response.data
        let run = []

        datas.forEach(data => {

            run.push(data[0])            
        })
        let modified_data = {
            
            run:run,
        }
        
        dispatch(fetchRunsSuccess(modified_data))
    
    
    }catch(error) {
                                                                                                                                      
        console.log(error)
    }
}
