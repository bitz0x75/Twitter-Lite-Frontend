import { GET_TWEET_ATTEMPT, GET_TWEET_FAILED, GET_TWEET_SUCCESS, initialState } from '../constants';

export const getTweetReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TWEET_ATTEMPT:
            return {
                ...state,
                attempt: true
            }
        case GET_TWEET_SUCCESS:
            return {
                ...state,
                attempt: false,
                data: action.data
            }
        case GET_TWEET_FAILED:
            return {
                ...state,
                attempt: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default getTweetReducer;