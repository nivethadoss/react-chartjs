import React, {useEffect} from 'react'
import Chart from "react-google-charts";
import { connect } from 'react-redux';
import { fetchDataGantt } from '../../redux/GanttChart/ganttActions';


function GanttChart(props) {
  useEffect(() => {
    props.fetchDataGantt()
    return () => {
        
    }
}, [])


    const columns = [
      { type: "string", label: "Order_id" },
      { type: "string", label: "Month" },
      { type: "string", label: "Manufacturer" },
      { type: "date", label: "Start Date" },
      { type: "date", label: "End Date" },
      { type: "number", label: "Nothing" },
      { type: "number", label: "Days" },
      { type: "string", label: "Nothing" }
      ];

      const rows =[
        [
          '2014Spring',
          'Spring 2014',
          'spring',
          new Date(2014, 2, 22),
          new Date(2014, 5, 20),
          null,
          100,
          null,
        ],

        [
          '2014Summer',
          'Summer 2014',
          'summer',
          new Date(2014, 5, 21),
          new Date(2014, 8, 20),
          null,
          100,
          null,
        ],
        [
          '2014Autumn',
          'Autumn 2014',
          'autumn',
          new Date(2014, 8, 21),
          new Date(2014, 11, 20),
          null,
          100,
          null,
        ],
        [
          '2014Winter',
          'Winter 2014',
          'winter',
          new Date(2014, 11, 21),
          new Date(2015, 2, 21),
          null,
          100,
          null,
        ],
        [
          '2015Spring',
          'Spring 2015',
          'spring',
          new Date(2015, 2, 22),
          new Date(2015, 5, 20),
          null,
          50,
          null,
        ],
        [
          '2015Summer',
          'Summer 2015',
          'summer',
          new Date(2015, 5, 21),
          new Date(2015, 8, 20),
          null,
          0,
          null,
        ],
        [
          '2015Autumn',
          'Autumn 2015',
          'autumn',
          new Date(2015, 8, 21),
          new Date(2015, 11, 20),
          null,
          0,
          null,
        ],
        [
          '2015Winter',
          'Winter 2015',
          'winter',
          new Date(2015, 11, 21),
          new Date(2016, 2, 21),
          null,
          0,
          null,
        ],
        [
          'Football',
          'Football Season',
          'sports',
          new Date(2014, 8, 4),
          new Date(2015, 1, 1),
          null,
          100,
          null,
        ],
        [
          'Baseball',
          'Baseball Season',
          'sports',
          new Date(2015, 2, 31),
          new Date(2015, 9, 20),
          null,
          14,
          null,
        ],
        [
          'Basketball',
          'Basketball Season',
          'sports',
          new Date(2014, 9, 28),
          new Date(2015, 5, 20),
          null,
          86,
          null,
        ],
        [
          'Hockey',
          'Hockey Season',
          'sports',
          new Date(2014, 9, 8),
          new Date(2015, 5, 21),
          null,
          89,
          null,
        ],
        
      ]
      
      const new_rows = Array.from(props.ganttData.data)
     

    return (


      props.ganttData.data
      ?(

        <div >
        <Chart
         
          chartType="Gantt"
          data={[columns, ...new_rows]}
          width="100%"
          height="50%"
          legendToggle
          options = {{
            height: 2000,
            gantt: {
                trackHeight: 30,  
            },
            timeline: {
              groupByRowLabel: true
            },
            
        }}
        />
                        </div> 

    ) : null
    )
  }

        
       

        
    


const mapStateToProps = state => {
  return {
    ganttData: state.gantt
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchDataGantt : () => fetchDataGantt(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GanttChart)