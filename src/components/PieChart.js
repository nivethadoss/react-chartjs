import React from 'react'
import {Pie} from "react-chartjs-2"
import { fetchDataNew } from '../redux/PieChart/pieActions'
import { connect } from 'react-redux'


function PieChart(props) {


    const pieChart = (

        props.pieData.data.schema_id
        ? (
            <Pie

                data = {{
                    labels :  props.pieData.data.schema_id,
                    datasets: [{
                        label: "Number of false and true for each document in this particular schema_id",
                        backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)',],
                        data: props.
                    }]
                }}
        )
    )

    return (
        <div className = {styles.container}>
            {pieChart}
        </div>
    )


}

const mapStateToProps  = state => {

    return {
        pieData: state.pie
    }
}

const mapDispatchToProps = dispatch > {

    return {

        fetchData: () => fetchDataNew(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps(PieChart))