import React, {useEffect,useState} from 'react'
import styles from './Drop.module.css' 





/*

function DropDown1(){

    
    const [state, setState] = useState([])
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        fetch("http://127.0.0.1:5000/ptu_serial").then(
            res => setState({data : res.data})
        
        ).catch(err => setHasError(true))
    }, [])
    
    
    return (
        <div>
            <select>
            {hasError? <div>Error occured.</div> : (state.data.map( d => <option> {d} </option>))}       
            </select> 
        </div>
    )
   
    
    }

*/

//for ptu_ids

    function DropDown1() {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch("http://127.0.0.1:5000/ptu_serial")
            .then(response => response.json())
            .then(data => setData(data));
        }, []);

        return (
    
            <div className = {styles.dropcontainer}>
            <select  
            placeholder="select ptu_serial_id">
                {data.map(d => (
                <option>{d} </option> ))}
           </select>
            </div>
        );
    }


export default DropDown1