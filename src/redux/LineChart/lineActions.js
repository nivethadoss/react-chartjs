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
export const fetchDataLine = async(dispatch,typestr,ptu,run,sdate,edate) => {
    dispatch(fetchLineStart())
    try{
        console.log(typestr)
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        //http://127.0.0.1:5000/ptu_filter?ptu_id=16&from=2017-02-10&to=2017-10-31&limit=100 (for first plot)
        let response = null
        if (typestr === 'all'){
            response = await axios.get('http://127.0.0.1:5000/ptus')
        }
        else {
            console.log(typestr,ptu,run,sdate,edate)
            let start_date = sdate.getFullYear() + "-" + (sdate.getMonth() + 1) + "-" + sdate.getDate();
            let end_date = edate.getFullYear() + "-" + (edate.getMonth() + 1) + "-" + edate.getDate();
            let url ='http://127.0.0.1:5000/ptu_filter?ptu_id='+ptu+'&from='+start_date+'&to='+end_date+'&limit='+run
            console.log(url)
            response = await axios.get(url)
        }
        let datas = response.data
        let date = []
        let ratio = []
        datas.forEach(data => {

            ratio.push(data[1])
            date.push(data[2])
            
        });
        let modified_data = {
            
            ratio: ratio,
            date: date
        }
        
        dispatch(fetchLineSuccess(modified_data))
    
    
    }catch(error) {
                                                                                                                                      
        console.log(error)
    }
}




