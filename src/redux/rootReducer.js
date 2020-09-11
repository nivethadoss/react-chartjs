import barReducer from './LineChart2/lineReducer2'
import pieReducer from './PieChart/pieReducer'
import lineReducer from './LineChart/lineReducer'
import lineReducer2 from './LineChart2/lineReducer2'
import ptuReducer from './PtuID/ptuIdReducer'

import { combineReducers } from 'redux'
import startDateReducer from './StartDate/startDateReducer'


const rootReducer = combineReducers({
        bar: barReducer,
        pie: pieReducer,
        line: lineReducer,
        line2: lineReducer2,
        ptu: ptuReducer,
        sDate: startDateReducer
})


export default rootReducer