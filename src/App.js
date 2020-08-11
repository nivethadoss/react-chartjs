import React from 'react';
import './App.css';
import Barchart from './Barchart'
import Linechart from "./Linechart"
import Piechart  from "./Piechart"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {  

  return (  

    <div className="App">  

      <Router>
            <div className ="col-sm-2">

              <Link to={'/Barchart'} className="nav-link btn btn-info">Bar Chart</Link>  

            </div>  

             <div className="container">

                <Switch>
                    <Route path='/Barchart' component={Barchart} />
                </Switch>

            </div>

            <div className ="col-sm-2">

              <Link to={'/Linechart'} className="nav-link btn btn-info">Line Chart</Link>

            </div>

             <div className="container">

                <Switch>
                    <Route path='/Linechart' component={Linechart} />
                </Switch>

            </div>

            <div className ="col-sm-2">

              <Link to={'/Piechart'} className="nav-link btn btn-info">Pie Chart</Link>

            </div>

             <div className="container">

                <Switch>
                    <Route path='/Piechart' component={Piechart} />
                </Switch>

            </div>

       </Router>

    </div>  

  );  

}  

export default App;  