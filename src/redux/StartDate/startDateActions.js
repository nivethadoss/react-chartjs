import {SET_SDATE} from './startDateTypes'

export const setStartDate = (startDate) => {
    return {
        type: SET_SDATE,
        payload: startDate
    }
}


