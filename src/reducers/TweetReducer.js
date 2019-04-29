import { TWEET_ATTEMPT, TWEET_FAILED, TWEET_SUCCESS, initialState } from '../constants';

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