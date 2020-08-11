import React, {Component} from "react"
import axios from "axios"
import {Pie} from "react-chartjs-2";

class Piechart extends React.Component {
    constructor (){
        super()
        this.state = {Data:{}};
    }
    componentDidMount (){
        axios.get().then(res => {
            console.log(res);
            const resp = res.data;
            let a_var = [];
            let b_var = [];
            resp.forEach(record => {
            a_var.push(record[0]);
            b_var.push(record[1]);
            });
            this.setState({
                Data: {
                    labels: a_var,
                    datasets: [
                    {
                    label: "something",
                    data: b_var,
                    backgroundColor: ["Blue"]}]
                }
            });
        })
    }
    render(){

    return(
        <div>
            <Pie
            data =  {this.state.Data}
            options = {{maintianAspectRatio : false}}/>
        </div>
    )}
}

export default Piechart