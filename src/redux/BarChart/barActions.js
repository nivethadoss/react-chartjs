import{FETCH_BAR_START, FETCH_BAR_SUCCESS, FETCH_BAR_FAILURE} from './barTypes'
import axios from 'axios'

export const fetchBarStart = () => {
    return {
        type: FETCH_BAR_START
    }
}


export const fetchBarSuccess = (data) => {
    return {
        type: FETCH_BAR_SUCCESS,
        payload: data
    }
}


export const fetchBarFailure = (error) => {
    return {
        type: FETCH_BAR_FAILURE,
        payload: error
    }
}
/*
export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchBarStart())
        axios.get("http://127.0.0.1:5000/hashid")
             .then(response => {
               console.log(response.data)
             })
             .catch(error => {
                console.log(error)
             })
    }
}
*/
export const fetchDataBar = async (dispatch) => {
    dispatch(fetchBarStart())
    try {
        let response = await axios.get("http://127.0.0.1:5000/hashid")
        let  datas = response.data
        let hash_id  = []
        let counts = []
       
        datas.forEach(data => {
            hash_id.push(data[0])
            counts.push(data[1])
            
        });
        let modified_data = {schema_id: hash_id,
                            document_counts: counts}
        dispatch(fetchBarSuccess(modified_data))

        /*
        const {data : {confirmed, recovered, deaths}} = response
        let modified_data = {
            confirmed: confirmed.value,
            recovered: recovered.value,
            deaths: deaths.value
        }
  
        dispatch(fetchBarSuccess(modified_data))
        */
    } catch (error) {
        
    }
}