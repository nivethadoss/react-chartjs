import React, {useState} from 'react';
import './App.css';
import BarChart from './components/BarComponents/BarChart';
import PieChart  from './components/PieComponents/PieChart';
import LineChart from "./components/LineComponents/LineChart";
import { Provider } from 'react-redux';
import store from './redux/store'
import styles from './App.module.css'
import Cards from './components/Cards/Cards';
import DatePicker from 'react-datepicker'





function App() { 
  
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  return (  
    
    <Provider store={store}>
      <Cards />
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
     
          <div className= "App">
                <BarChart/>
       
          </div>
          <div className = {styles.lpchart}>
            <LineChart/>
            <PieChart/>
          </div>
         
    </Provider>
    )}


export default App;  