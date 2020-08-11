import React, {Components} from "react";
import axios from "axios";
import {Line} from "react-chartjs-2";

class Linechart extends React.Component{
    constructor(props){
        super(props)
        this.state =  {Data : {}}
    }
    componentDidMount(){
        axios.get().then(res => {
            console.log(res);
            const resp = res.data;
            let a_var = [];
            let b_var = [];
            resp.forEach(record => {
                a_var.push(resp[0]);
                b_var.push(resp[1]);
            });
            this.setState({
            Data: {
                labels: a_var,
                datatsets: [
                {
                    label: "something",
                    data: b_var,
                    backgroundColor: ["#4C4CFF"]
                }]
            }});
        })
    }
    render(){
    return(
        <div>
            <Line
            data = {this.state.data}
            options  = {{maintainAspectRation: false}}/>
        </div>
    )}
}

export default Linechart
