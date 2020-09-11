import React, {useEffect, useState} from 'react'
import styles from './Drop.module.css' 




// for base stations


function DropDown6(){


    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/base_stations")
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

export default DropDown6