import React from 'react';
import './App.css';
import LineChart from "./components/LineComponents/LineChart";
import LineChart2 from "./components/LineComponents/LineChart2";
import { Provider } from 'react-redux';
import store from './redux/store'
import styles from './App.module.css'

//import Navbar from './components/NavbarComponents/Nav'
import NavbarLight from './components/NavbarComponents/Nav'
import PtuDrop from './components/PtuComponents/PtuDrop';
import ManuDrop from './components/ManuComponents/ManuDrops';
import StartDate from './components/StateDateComponent/StartDate';
import RunDrop from './components/TotalRunsComponents/TotalRunsDrop'
function App() { 

  

  return (  
    
    <Provider store={store}>
      
     
      <NavbarLight/>
      <div className = {styles.lpchart}>
      <PtuDrop/>
      <ManuDrop/>
      <StartDate/>
      </div>

        <div className = {styles.lpchart}>
         <LineChart/>
         <LineChart2/>
        </div>
         
    </Provider>
    )}


export default App;  