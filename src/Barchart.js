import React, {Component}from 'react';
import axios from "axios"
import {Bar} from "react-chartjs-2";
import logo from './logo.svg';
import './App.css';

class Barchart extends React.Component{
    constructor(props){
        super(props)
        this.state  = {
            Data:{}
        }
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:5000/").then(res => {
        console.log(res);
        const sch_docu = res.data;
        let schema_id = [];
        let docu_count = [];
        sch_docu.forEach(record => {
        schema_id.push(record[0]);
        docu_count.push(record[1]);
        });
        this.setState ({
        Data: {
            labels: schema_id,
            datasets: [{
                label: "number of docu for each hash_id",
                data: docu_count,
                backgroundColor: ["#0000FF"]
            }]
        }
        }) });
    }
    render(){
    return(
        <div>
            <Bar
            data = {this.state.Data}
            options = {{maintainAspectRatio: false }}
            />
        </div>
    )
    }
}

export default Barchart;
