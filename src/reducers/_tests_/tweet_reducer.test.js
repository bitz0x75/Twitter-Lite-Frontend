import TweetReducer from '../TweetReducer';
import * as types from '../../constants';

describe('TweetReducer', () => {
    const initialState = {
        attempt: false,
        data: [],
        error: null
    }

    it('should return the initial state', () => {
        expect(TweetReducer(initialState, {})).toEqual(initialState)
    })

    it('should handle Tweet attempt', () => {
        expect(TweetReducer(initialState, {
            type: types.TWEET_ATTEMPT
        })).toEqual({
            ...initialState,
            attempt: true
        })
    })

    it('should handle Tweet', () => {
        expect(TweetReducer(initialState, {
            type: types.TWEET_SUCCESS
        })).toEqual({
            ...initialState,
            data: undefined
        })
    })

    it('should handle Tweet failure', () => {
        expect(TweetReducer(initialState, {
            type: types.TWEET_FAILED
        })).toEqual({
            ...initialState,
            error: undefined
        })
    })
})