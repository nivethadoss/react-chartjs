import React, {useEffect} from 'react'
import {fetchDataPtu} from '../../redux/PtuID/ptuIdActions'
import styles from './Drop.module.css'
import {connect} from 'react-redux'


function PtuDrop(props) {
    useEffect(() => {
        props.fetchDataPtu()
        return () => {
            
        }
    }, [])

    return ( 
        
        props.ptuData.data.ptu
        ?(


        <div>
            <div className = {styles.dropcontainer}>
            <select  
                placeholder="select ptu_serial_id">
                {props.ptuData.data.ptu.map((d,i) => (<option key={i}>{d} </option> ))}
           </select>
            </div>
        </div>):null
    )
}

const mapStateToProps = state => {
    return {
        ptuData: state.ptu
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataPtu : () => fetchDataPtu(dispatch),
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(PtuDrop)
