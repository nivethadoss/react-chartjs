import React, {useEffect} from 'react'
import {Bar} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {fetchDataBar} from '../../redux/BarChart/barActions'

import styles from './Bar.module.css'
import { fetchDataLine } from '../../redux/LineChart/lineActions'

function BarChart(props) {

    useEffect(() => {
        props.fetchDataBar()
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
                        backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)','rgba(238, 130, 238)','orange','brown','violet','gray','black', 'green','blue','red',
                        'rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)','rgba(238, 130, 238)','orange','brown','violet','gray','black', 'green','blue','rgba(238, 130, 238)','orange',
                        'brown','violet','gray','black', 'green','blue','red','rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)','rgba(238, 130, 238)','orange','brown','violet','gray','black', 'green','blue','red',
                        'rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)','rgba(238, 130, 238)','orange','brown','violet','gray','black', 'green','blue','rgba(238, 130, 238)','orange',
                        'brown','violet','gray','black', 'green','blue','red','blue','red','rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)','rgba(238, 130, 238)','orange','brown','violet','gray','black', 'green','blue','red',
                        'rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)','rgba(238, 130, 238)','orange','brown','violet','gray','black', 'green','blue','rgba(238, 130, 238)','orange',
                        'brown','violet','gray','black', 'green','blue','red','rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)','rgba(238, 130, 238)','orange','brown','violet','gray','black', 'green','blue','red',
                        'rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)','rgba(238, 130, 238)','orange','brown','violet','gray','black', 'green','blue','rgba(238, 130, 238)','orange',
                        'brown','violet','gray' ],
                       
                        data:props.barData.data.document_counts
                    }],
                }}

                options={{
                    maintainAspectRatio: false,
                    scales:{
                        xAxes: [{
                            display: false //this will remove all the x-axis grid lines
                        }]
                    },
                    legend: {display: false},
                    title: {display:true, text:"Schema Statistics"},
                    
                    //onClick: (evt, element) => {
                        //if(element.length>0){
                            //let idx = element[0]['_index']
                            //let schema = element[0]['_chart']['config']['data']['labels'][idx]
                            //console.log(schema)
                            //props.fetchDataPie(schema)
                            //props.fetchDataLine(schema)
                        }
                    }
                
            
            />
        ): null


    )

    return (
        <div className={styles.barcontainer}>
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
        fetchDataBar : () => fetchDataBar(dispatch),
        //fetchDataPie : (schemaid) => fetchDataPie(dispatch,schemaid),
        //fetchDataLine : (schemaid) => fetchDataLine(dispatch,schemaid)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart)
