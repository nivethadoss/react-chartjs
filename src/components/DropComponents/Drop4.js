import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import styles from './Drop.module.css' 
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 

//for start dates
class Example1 extends React.Component {
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

export default Example1