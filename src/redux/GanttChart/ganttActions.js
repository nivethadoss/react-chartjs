import {FETCH_GANTT_START, FETCH_GANTT_SUCCESS, FETCH_GANTT_FAILURE} from './ganttTypes'
import axios from 'axios'

export const fetchGanttStart = () => {
    return {
        type: FETCH_GANTT_START
    }
}

export const fetchGanttSuccess = (data) => {
    return {
        type: FETCH_GANTT_SUCCESS,
        payload: data

    }
}

export const fetchGanttFailure = (error) => {

    return {

        type: FETCH_GANTT_FAILURE,
        payload: error
    }
}

//export const fetchDataLine = async(dispatch,schemaid) => {
export const fetchDataGantt = async(dispatch) => {
    dispatch(fetchGanttStart())
    try{
        //let response = await axios.get (`http://127.0.0.1:5000/msg?id=${schemaid}`)
        let response = await axios.get('http://127.0.0.1:5000/gantt')
        let datas = response.data
        let row_list = []
        let update_list = []

        console.log("gggggggggggggg")
        

        
        datas.forEach(data => {
            var s_date = data[3]
            var e_date = data[4]
            

            var start_date = s_date.replace(/-/g, ',')
            var end_date = e_date.replace(/-/g, ',')
            var start = new Date(start_date)
            var end = new Date(end_date)

            if (start < end){
                data.push(start)
                data.push(end)
            }
            else{
                data.push(end)
                data.push(start)
            }

        
            row_list.push(data)
            
        })



        row_list.forEach(data => {
            var index1 = data.indexOf(data[3])
            data.splice(index1, 2) 
            var item = data[1]
            var index_of_one = data.indexOf(data[1])
            data.splice(index_of_one, 1)
            data.push(item)
            data.splice(1, 0, data[0])
            data.splice(5 , 0, null) 
            data.push(null)
           
          
            
            
            
    
            })
               
       
            console.log(row_list)
        dispatch(fetchGanttSuccess(row_list))
    
    
    }catch(error) {
                                                                                                                                      
        console.log(error)
    }
}
