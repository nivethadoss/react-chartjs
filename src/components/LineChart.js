import React, {useEffect}from 'react'
import {Line} from 'react-chartjs-2'
import {fetchDataLine} from '../redux/LineChart/lineActions'
import { connect } from 'react-redux'
import styles from './Charts.module.css'


function LineChart(props){

    const lineChart = (

        
        <Line


            data = {{
                labels: props.lineData.data.date,
                datasets: [{
                    label: "Number of messgaes in each date",
                    backgroundColor: ['rgba(255,0,0,0.5)'],
                    fill: false,
                    data: props.lineData.data.count
                }]
            }}

            options = {{
                responsive: true,
                legend: {
                    display: false
                },
                title: {display: true, text: "Number of messages for each "}
            }}
            />
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