import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS } from '../constants';
import axios from 'axios';

export const loginRequest = () => ({
    type: LOGIN_ATTEMPT
})

export const loginError = (error) => ({
    type: LOGIN_FAILED,
    error
})

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    data
})

export const login = (data, history) => dispatch => {
    dispatch(loginRequest())
    const url = "https://andela-twitter.herokuapp.com/auth/login/";
    return axios
        .post(
            url, 
            data, 
            {'Access-Control-Allow-Origin': true}
          )
        .then(response => {
            if (response.status === 200){
                const token = response.data['auth_token']
                localStorage.setItem('user', token)
                dispatch(loginSuccess(response.data))
                history.push('/home')
            }else if(response === undefined){
                history.push('/error')
            }
        })
        .catch(error => dispatch(loginError(error)))
}

export const loginActions = {
    login,
    loginRequest,
    loginError,
    loginSuccess
}

export default loginActions;