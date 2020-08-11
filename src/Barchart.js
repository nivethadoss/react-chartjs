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
        this.handleClick = this.handleClick.bind(this)
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
                backgroundColor: ["#3cb371", "#0000FF","#9966FF", "#4C4CFF","#00FFFF", "#f990a7","#aad2ed","#FF00FF","Blue", "Red", "purple", "orange", "brown"],

            }]
        }
        }) });
    }
    const activePoints = getElementAtEvent(e.event);
    handleClick(i){
        getElementAtEvent
        var eve = i[0];
        console.log(eve._index)
        var x_value = this.Data.labels[eve._index];
        var y_value = this.Data.datasets[0].data[eve._index];
        console.log(x_value);
        console.log(y_value);


    }
    render(){
    return(
        <div>
            <Bar
            width={500}
            height={500}
            data = {this.state.Data}
            options = {{maintainAspectRatio: false }}
            onClick= {this.handleClick}
            />
        </div>
    )
    }
}

export default Barchart;
