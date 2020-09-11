import React, {useEffect, useState} from 'react'
import styles from './Drop.module.css' 



//for total runs

function DropDown3(){


    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/total_runs")
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (

        <div className = {styles.dropcontainer}>
        <select  
        placeholder="select manufacturer">
            {data.map(d => (
            <option>{d} </option> ))}
       </select>
        </div>
    );
}

export default DropDown3