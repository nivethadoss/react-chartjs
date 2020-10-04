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
export const fetchDataLine2 = async(dispatch,typestr,ptu,run,sdate,edate) => {
    dispatch(fetchLine2Start())
    try{
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
       

        //http://127.0.0.1:5000/order_ids_default
        //http://127.0.0.1:5000/order_ids?from=02-02-2017&to=02-08-2017&order_id=K2_000006-02&days=20
        let response = null;
        if (typestr === 'all'){
            response = await axios.get('http://127.0.0.1:5000/order_ids_default')
        }
        else {
            console.log(typestr,ptu,run,sdate,edate)
            let start_date = sdate.getFullYear() + "-" + (sdate.getMonth() + 1) + "-" + sdate.getDate();
            let end_date = edate.getFullYear() + "-" + (edate.getMonth() + 1) + "-" + edate.getDate();
            let url ='http://127.0.0.1:5000/order_ids?from='+start_date+'&to='+end_date+'&order_id='+ptu+'&days='+run
            console.log(url)
            response = await axios.get(url)
        }
        
        
        
        let datas = response.data
        let date = []
        let ratio = []
   
        datas.forEach(data => {

            ratio.push(data[2])
            date.push(data[3])
            
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


