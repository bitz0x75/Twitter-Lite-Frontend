import { FETCH_TWEET_ATTEMPT, FETCH_TWEET_FAILED, FETCH_TWEET_SUCCESS } from '../constants';

const initialState = {
    attempt: false,
    data: [],
    error: null
}

export const fetchTweetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TWEET_ATTEMPT:
            return {
                ...state,
                attempt: true
            }
        case FETCH_TWEET_SUCCESS:
            return {
                ...state,
                attempt: false,
                data: action.payload
            }
        case FETCH_TWEET_FAILED:
            return {
                ...state,
                attempt: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default fetchTweetsReducer;