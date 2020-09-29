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
import BaseDrop from './components/BaseStationComponent/BaseStation'
import EndDate from './components/EndDateComponent/EndDate';
import GanttChart from './components/GanttChartComponents/Gantt'
import OkButton from './components/ButtonComponents/PlotButton';

function App() { 

  

  return (  
    
    <Provider store={store}>
      
     
      <NavbarLight/>
      <div className = {styles.lpchart}>
      <PtuDrop/>
      <ManuDrop/>
      <RunDrop/>
      <BaseDrop/>
      <StartDate/>
      <EndDate/>
      <OkButton/>
      </div>

        <div className = {styles.lpchart}>
         <LineChart/>
         <LineChart2/>
        </div>
        <GanttChart/>
         
    </Provider>
    )}


export default App;  