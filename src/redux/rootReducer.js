import barReducer from './BarChart/barReducer'
import pieReducer from './PieChart/pieReducer'
import lineReducer from './LineChart/lineReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
        bar: barReducer,
        pie: pieReducer,
        line: lineReducer
        
       
})


export default rootReducer