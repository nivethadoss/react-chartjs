import React from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart  from './components/PieChart';
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {  
  return (  
    <Provider store={store}>
    <div className="App">
        <BarChart></BarChart>
        <PieChart></PieChart>
    </div>
    </Provider>
    )}


export default App;  