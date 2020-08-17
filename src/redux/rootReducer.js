import barReducer from './BarChart/barReducer'
import pieReducer from './PieChart/pieReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
        bar: barReducer,
        pie: pieReducer
})


export default rootReducer