import React, {useEffect}from 'react'
import {Line} from 'react-chartjs-2'
import {fetchDataLine} from '../../redux/LineChart/lineActions'
import { connect } from 'react-redux'
import styles from './Line.module.css'


function LineChart(props){

    const lineChart = (

        props.lineData.data.date ? (

        
        <Line


            data = {{
                labels: props.lineData.data.date,
                datasets: [{
                    label: "Number of messgaes in each date",
                    backgroundColor: ['rgba(255,0,0,0.5)'],
                    fill: false,
                    borderColor: "#108bc9",
                    pointRadius: 3,
                    pointHoverRadius: 6,
                    borderWidth: 2,
                    data: props.lineData.data.count
                }]
            }}

            options = {{
              
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                title: {display: true, text: "Number of messages for each "},
                

            }}
            />):null
    )

    return (
        <div className = {styles.linecontainer}>
            {lineChart}
        </div>
    )


}

const mapStateToProps = state => {

    return {
        lineData: state.line
    }
}

const mapDispatchToProps = dispatch =>{

    return {
        fetchData: () => fetchDataLine(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineChart)