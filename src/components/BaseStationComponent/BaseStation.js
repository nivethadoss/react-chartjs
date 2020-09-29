import React, {useEffect} from 'react'
import {fetchDataBase} from '../../redux/BaseDrop/baseActions'
import styles from './base.module.css'
import {connect} from 'react-redux'


function BaseDrop(props) {
    useEffect(() => {
        props.fetchDataBase()
        return () => {
            
        }
    }, [])

    return ( 
        
        props.baseData.data.base
        ?(


        <div>
            <div className = {styles.basecontainer}>
            <select  
                placeholder="select ptu_serial_id">
                {props.baseData.data.base.map((d,i) => (<option key={i}>{d} </option> ))}
           </select>
            </div>
        </div>):null
    )
}

const mapStateToProps = state => {
    return {
        baseData: state.base
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataBase : () => fetchDataBase(dispatch)
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(BaseDrop)
