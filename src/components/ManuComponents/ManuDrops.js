import React, {useEffect} from 'react'
import {fetchDataManu} from '../../redux/ManuDrop/manuActions'
import styles from './Manu.module.css'
import {connect} from 'react-redux'


function ManuDrop(props) {
    useEffect(() => {
        props.fetchDataManu()
        return () => {
            
        }
    }, [])

    return ( 
        
        props.manuData.data.manu
        ?(


        <div>
            <div className = {styles.manucontainer}>
            <select  
                placeholder="select ptu_serial_id">
                {props.manuData.data.manu.map((d,i) => (<option key={i}>{d} </option> ))}
           </select>
            </div>
        </div>):null
    )
}

const mapStateToProps = state => {
    return {
        manuData: state.manu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataManu : () => fetchDataManu(dispatch),
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ManuDrop)
