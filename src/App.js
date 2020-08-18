import React from 'react';
import './App.css';
import BarChart from './components/BarComponents/BarChart';
import PieChart  from './components/PieComponents/PieChart';
import LineChart from "./components/LineComponents/LineChart";
import { Provider } from 'react-redux';
import store from './redux/store'
import styles from './App.module.css'
import Cards from './components/Cards/Cards';





function App() {  
  return (  
    
    <Provider store={store}>
      <Cards />
     
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