import barReducer from './LineChart2/lineReducer2'
import pieReducer from './PieChart/pieReducer'
import lineReducer from './LineChart/lineReducer'
import lineReducer2 from './LineChart2/lineReducer2'
import ptuReducer from './PtuID/ptuIdReducer'
import manuReducer from './ManuDrop/manuReducer'
import { combineReducers } from 'redux'
import startDateReducer from './StartDate/startDateReducer'
import runsReducer from './TotalRunsDrop/totalRunsReducer'
import baseReducer from './BaseDrop/baseReducer';
import  endDateReducer from './EndDate/endDateReducer'
import ganttReducer from './GanttChart/ganttReducer'
import buttonReducer from './PlotButton/buttonReducer'



const rootReducer = combineReducers({
        bar: barReducer,
        pie: pieReducer,
        line: lineReducer,
        line2: lineReducer2,
        ptu: ptuReducer,
        sDate: startDateReducer,
        manu: manuReducer,
        run:runsReducer,
        base: baseReducer,
        eDate: endDateReducer,
        gantt: ganttReducer,
        button: buttonReducer
})


export default rootReducer