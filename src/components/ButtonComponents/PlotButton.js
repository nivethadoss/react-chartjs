import React, {Component} from 'react'
import styles from './button.module.css'
import {fetchDataLine} from '../../redux/LineChart/lineActions'
import {fetchDataLine2} from '../../redux/LineChart2/lineActions2'

import { connect } from 'react-redux'

function OkButton (props) {

    const handleChange = (event) => {
        props.fetchData('selected',
                            props.ptuData.selected,
                            props.runData.selected,
                            props.sDate.data,
                            props.eDate.data);
        
        props.fetchData2('selected',
                            props.manuData.selected,
                            props.runData.selected,
                            props.sDate.data,
                            props.eDate.data);
        
        console.log(event.target.value)
    }
   

   
    return (
        <div>
            <button
            className={styles.plotcontainer}
            onClick={handleChange}>Plot </button>
               
        </div>

    )
       
    
}

const mapStateToProps = state => {

    return {
        ptuData: state.ptu,
        sDate: state.sDate,
        eDate: state.eDate,
        runData: state.run,
        manuData: state.manu

    }
}

const mapDispatchToProps = dispatch =>{

    return {
        fetchData: (typestr,ptu,run,sdate,edate) => fetchDataLine(dispatch,typestr,ptu,run,sdate,edate),
        fetchData2: (typestr,ptu,run,sdate,edate) => fetchDataLine2(dispatch,typestr,ptu,run,sdate,edate)
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(OkButton)