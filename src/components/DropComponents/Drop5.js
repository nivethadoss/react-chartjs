

/*
import React, {useState} from 'react'
import styles from './Drop.module.css' 
import DatePicker from "react-datepicker/dist/react-datepicker.css";  
//import DatePicker from './react-datepicker'



function Date_picker() {

    const [date, setDate] = useState(new Date())

  
        return (
            <div className = {styles.dropcontainer}>
            <DatePicker  
            showPopperArrow={false} 
            placeholderText="Select Date" 
            selected={date} 
            onChange={date => setDate(date)} />  
            </div>
                   
       
    );
    
    

}
export default Date_picker
*/

import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import styles from './Drop.module.css' 
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 

// for end dates
class Example2 extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
        <div className={styles.dropcontainer}>
        <DatePicker
        placeholderText="Select date"
        selected={this.state.startDate}
        onChange={this.handleChange}
        showYearDropdown
        
      />
      </div>
    );
  }
}

export default Example2