import{FETCH_BAR_START, FETCH_BAR_SUCCESS, FETCH_BAR_FAILURE} from './barTypes'

const initialState = {
    loading : false,
    data : {},
    error : 'No Error'
}


const barReducer = (state = initialState, action) => {

    switch(action.type){

        case FETCH_BAR_START:
            return {
                ...state,
                loading: true 
            }


        case FETCH_BAR_SUCCESS:
            return{
                ...state,
                data: action.payload,
                loading: false
            }

        case FETCH_BAR_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default: return state
    }
}

export default barReducer