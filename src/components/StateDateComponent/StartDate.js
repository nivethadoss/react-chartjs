import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import styles from './Drop.module.css' 
import {setStartDate} from '../../redux/StartDate/startDateActions'


function StartDate(props) {



    return (
        props.sDate ? (

        <div className={styles.dropcontainer}>
            <DatePicker
            placeholderText="Select date"
            selected= {props.sDate.data}
            onChange= {props.setStartDate}
            showYearDropdown/>
      </div>):null
    )
}

const mapStateToProps = state => {
    return {
        sDate: state.sDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate : (date) => dispatch(setStartDate(date))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(StartDate)
