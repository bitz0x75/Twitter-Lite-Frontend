import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESS } from '../constants';

const initialState = {
    attempt: false,
    data: [],
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_ATTEMPT:
            return {
                ...state,
                attempt: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                attempt: false,
                data: action.payload
            }
        case LOGIN_FAILED:
            return {
                ...state,
                attempt: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const loginData = state => state.data
export const loginAttempt = state => state.attempt
export const loginError = state => state.error

export default loginReducer