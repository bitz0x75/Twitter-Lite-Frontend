import { TWEET_ATTEMPT, TWEET_FAILED, TWEET_SUCCESS } from '../constants';

const initialState = {
    attempt: false,
    data: [],
    error: null
}

export const tweetReducer = (state = initialState, action) => {
    switch(action.type) {
        case TWEET_ATTEMPT:
            return {
                ...state,
                attempt: true
            }
        case TWEET_SUCCESS:
            return {
                ...state,
                attempt: false,
                data: action.payload
            }
        case TWEET_FAILED:
            return {
                ...state,
                attempt: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default tweetReducer;