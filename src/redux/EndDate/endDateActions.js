import {SET_EDATE} from './endDateTypes'

export const setEndDate = (endDate) => {
    return {
        type: SET_EDATE,
        payload: endDate
    }
}


