import { SIGNUP_ATTEMPT, SIGNUP_SUCCESS, SIGNUP_FAILED, initialState } from '../constants';

export const signupReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGNUP_ATTEMPT:
            return {
                ...state,
                attempt: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                attempt: false,
                data: action.payload
            }
        case SIGNUP_FAILED:
            return {
                ...state,
                attempt: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const signupData = state => state.data
export const signupAttempt = state => state.attempt
export const signupError = state => state.error

export default signupReducer