
import SignupReducer from '../SignupReducer';
import * as types from '../../constants';

describe('SignupReducer', () => {
    const initialState = {
        attempt: false,
        data: [],
        error: null
    }

    it('should return the initial state', () => {
        expect(SignupReducer(initialState, {})).toEqual(initialState)
    })

    it('should handle Signup attempt', () => {
        expect(SignupReducer(initialState, {
            type: types.SIGNUP_ATTEMPT
        })).toEqual({
            ...initialState,
            attempt: true
        })
    })

    it('should handle Signup', () => {
        expect(SignupReducer(initialState, {
            type: types.SIGNUP_SUCCESS
        })).toEqual({
            ...initialState,
            data: undefined
        })
    })

    it('should handle Signup failure', () => {
        expect(SignupReducer(initialState, {
            type: types.SIGNUP_FAILED
        })).toEqual({
            ...initialState,
            error: undefined
        })
    })
})