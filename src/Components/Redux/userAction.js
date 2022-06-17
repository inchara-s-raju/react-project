import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './userTypes'
import axios from 'axios'

export function fetchUserRequest(){
    return{
        type:FETCH_USER_REQUEST
    }
}
export function fetchUserSuccess(users){
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
export function fetchUserFailure(error){
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUsers=()=>{
    return(dispatch)=> {
        dispatch(fetchUserRequest)
       axios.get('http://localhost:3001/users')
       .then(response=>{
       const users=response.data
        dispatch(fetchUserSuccess(users))})
        .then(error=>{
            const errorMsg=error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}