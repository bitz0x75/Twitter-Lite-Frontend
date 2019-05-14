import { FETCH_HASHTAG_ATTEMPT, FETCH_HASHTAG_FAILED, FETCH_HASHTAG_SUCCESS } from '../constants';

const initialState = {
    attempt: false,
    data: [],
    error: null
}

const fetchHashTagsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HASHTAG_ATTEMPT:
            return {
                ...state,
                attempt: true
            }
        case FETCH_HASHTAG_SUCCESS:
            return {
                ...state,
                attempt: false,
                data: action.payload
            }
        case FETCH_HASHTAG_FAILED:
            return {
                ...state,
                attempt: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default fetchHashTagsReducer;