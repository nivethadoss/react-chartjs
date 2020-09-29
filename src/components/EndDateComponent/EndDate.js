import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import styles from './Drop.module.css' 
import {setEndDate} from '../../redux/EndDate/endDateActions'


function EndDate(props) {
  

    return (
        props.eDate ? (

        <div className={styles.dropcontainer}>
            <DatePicker
            placeholderText="Select date"
            selected= {props.eDate.data}
            onChange= {props.setEndDate}
            showYearDropdown/>
      </div>):null
    )
}

const mapStateToProps = state => {
    return {
        eDate: state.eDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEndDate : (date) => dispatch(setEndDate(date))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(EndDate)
