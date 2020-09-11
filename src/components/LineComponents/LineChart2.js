import React, {useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import {fetchDataLine2} from '../../redux/LineChart2/lineActions2'
import { connect } from 'react-redux'
import styles from './Line.module.css'


function LineChart2(props){

    useEffect(() => {
        props.fetchData()
        return () => {
            
        }
    }, [])


    const lineChart2 = (

        
        <Line


            data = {{
                labels: props.lineData.data.date,
                datasets: [{
                    label: "ratio of ptus in limited runs",
                    backgroundColor: ['rgba(255,0,0,0.5)'],
                    fill: false,
                    borderColor: "#108bc9",
                    pointRadius: 3,
                    pointHoverRadius: 6,
                    borderWidth: 2,
                    data: props.lineData.data.ratio
                }]
            }}

            options = {{
              
                maintainAspectRatio: true,
                legend: {
                    display: false
                },
                title: {display: true, text: "ratio of ptu performed better in limited runs"},
                

            }}
            />
    )

    return (
        <div className = {styles.linecontainer}>
            {lineChart2}
        </div>
    )


}

const mapStateToProps = state => {

    return {
        lineData: state.line2
    }
}

const mapDispatchToProps = dispatch =>{

    return {
        fetchData: () => fetchDataLine2(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineChart2)

