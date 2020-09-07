import React from 'react';
import './App.css';
import LineChart from "./components/LineComponents/LineChart";
import { Provider } from 'react-redux';
import store from './redux/store'
import styles from './App.module.css'
import Cards from './components/Cards/Cards';
import DropDown1 from './components/DropComponents/Drop1'
import DropDown2 from './components/DropComponents/Drop2'
import DropDown3 from './components/DropComponents/Drop3'
import DropDown4 from './components/DropComponents/Drop4'
import DropDown5 from './components/DropComponents/Drop5'
function App() { 

  

  return (  
    
    <Provider store={store}>
      <Cards />
      <DropDown1/>
      <DropDown2/>
      <DropDown3/>
      <DropDown4/>
      <DropDown5/>
      

       <div className = {styles.lpchart}>
         <LineChart/>
        </div>
         
    </Provider>
    )}


export default App;  