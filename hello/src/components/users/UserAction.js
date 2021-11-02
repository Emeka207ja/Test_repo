import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './UserTypes'

export const fetchUserRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = () => {
    return{
        type: FETCH_USERS_Success,
        payLoad: users
    }
}

export const fetchUserFailure = () => {
    return{
        type: FETCH_USERS_Failure,
        payLoad: error
    }
}