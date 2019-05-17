import { SIGNUP_ATTEMPT, SIGNUP_FAILED, SIGNUP_SUCCESS } from '../constants/index';
import axios from 'axios';

export const signupRequest = () => ({
    type: SIGNUP_ATTEMPT
})

export const signupError = (error) => ({
    type: SIGNUP_FAILED,
    error
})

export const signupSuccess = (data) => ({
    type: SIGNUP_SUCCESS,
    data
})

export const signup = (data, history) => dispatch => {
    dispatch(signupRequest())
    const url = "https://andela-twitter.herokuapp.com/signup/";
    return axios
        .post(
            url, 
            data, 
            {'Access-Control-Allow-Origin': true}
          )
        .then(response => {
            if (response.status === 201){
                const token = response.data['auth_token']
                localStorage.setItem('user', token)
                dispatch(signupSuccess(response.data))
                history.push('/home')
            }else if(response === undefined){
                history.push('/error')
            }
        })
        .catch(error => dispatch(signupError(error)))
}

export const signupActions = {
    signup,
    signupRequest,
    signupError,
    signupSuccess
}

export default signupActions;

