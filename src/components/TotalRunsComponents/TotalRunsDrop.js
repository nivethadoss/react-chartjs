import React, {useEffect} from 'react'
import {fetchDataRuns,setSelectedRuns} from '../../redux/TotalRunsDrop/totalRunsActions'
import styles from './Runs.module.css'
import {connect} from 'react-redux'


function RunDrop(props) {
    useEffect(() => {
        props.fetchRuns()
        return () => {
            
        }
    }, [])

    const handleChange = (event) => {
        props.setSelectedRuns(event.target.value);
        console.log(event.target.value)
    }

    return ( 
        
        props.runData.data.run
        ?(


        <div>
            <div className = {styles.runcontainer}>
            <select  
                placeholder="select ptu_serial_id" onChange={handleChange}>
                {props.runData.data.run.map((d,i) => (<option key={i}>{d} </option> ))}
           </select>
            </div>
        </div>):null
    )
}

const mapStateToProps = state => {
    return {
        runData: state.run
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRuns : () => fetchDataRuns(dispatch),
        setSelectedRuns : (val) => dispatch(setSelectedRuns(val))
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(RunDrop)
