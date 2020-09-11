import React from 'react';
import './App.css';
import LineChart from "./components/LineComponents/LineChart";
import LineChart2 from "./components/LineComponents/LineChart2";
import { Provider } from 'react-redux';
import store from './redux/store'
import styles from './App.module.css'
import DropDown1 from './components/DropComponents/Drop1'
import DropDown2 from './components/DropComponents/Drop2'
import DropDown3 from './components/DropComponents/Drop3'
import DropDown6 from './components/DropComponents/Drop6'
import Example1 from './components/DropComponents/Drop4'
import Example2 from './components/DropComponents/Drop5'
//import Navbar from './components/NavbarComponents/Nav'
import NavbarLight from './components/NavbarComponents/Nav'
import PtuDrop from './components/PtuComponents/PtuDrop';
import StartDate from './components/StateDateComponent/StartDate';
function App() { 

  

  return (  
    
    <Provider store={store}>
      
     
      <NavbarLight/>
      <PtuDrop/>
      <DropDown2/>
      <DropDown3/>
      <DropDown6/>
      <StartDate/>
      <Example2/>
      

       <div className = {styles.lpchart}>
         <LineChart/>
         <LineChart2/>
        </div>
         
    </Provider>
    )}


export default App;  