import React, {useEffect} from 'react'
import {Bar} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {fetchDataNew} from '../redux/BarChart/barActions'
import styles from './Charts.module.css'

function BarChart(props) {

    useEffect(() => {
        props.fetchData()
        return () => {
            
        }
    }, [])


    const barChart = (

        props.barData.data.schema_id
        ? (
            <Bar 

                data = {{
                    labels : props.barData.data.schema_id,
                    datasets:[{
                        label: 'Number of documents for Each schema_id',
                        backgroundColor:[
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data:props.barData.data.document_counts
                    }],
                }}

                options={{
                    legend: {display: false},
                    title: {display:true, text:"Covid-19"}
                }}
            
            />
        ): null


    )

    return (
        <div className={styles.container}>
            {barChart}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        barData: state.bar
    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchData : () => fetchDataNew(dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart)
