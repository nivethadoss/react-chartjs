import React, {useEffect} from 'react'
import {Pie} from "react-chartjs-2"
import { fetchDataPie } from '../../redux/PieChart/pieActions'
import { connect } from 'react-redux'
import styles from './Pie.module.css'


function PieChart(props) {
    

    //useEffect(() => {
    //    props.fetchData()
    //    return () => {
            
    //    }
    //}, [])

    const pieChart = (

        props.pieData.data.schema_id
        ? (
            <Pie

                data = {{
                    labels :  ["False", "True"],
                    datasets: [{
                        label: "Number of false and true for each document in this particular schema_id",
                        backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)',],
                        data: [props.pieData.data.Number_of_false, props.pieData.data.Number_of_true]
                    }]
                }}
                options = {{
                    
                    maintainAspectRatio: false,
                    legend : {display: false},
                    title: {display: true, text: "Number of True and False for each schema"}
                }}
                />

        ): null
    )

    return (
        <div className = {styles.piecontainer}>
            {pieChart}
        </div>
    )


}


const mapStateToProps  = state => {

    return {
        pieData: state.pie
    }
}

const mapDispatchToProps = dispatch => {

    return {

        fetchData: () => fetchDataPie(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieChart)