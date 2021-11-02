import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './UserTypes'

const initialState={
    loading = false,
    users = [],
    error = ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return{
            ...state,
            loading:false,
            users:action.payLoad,
            error: ''
        }
        case FETCH_USERS_FAILURE: return{
            ...state,
            loading:false,
            error:action.payLoad,
            users:[]
        }
        default: return state
    }
}
export default UserReducer