import SigninReducer from '../SigninReducer';
import * as types from '../../constants';

describe('SigninReducer', () => {
    const initialState = {
        attempt: false,
        data: [],
        error: null
    }

    it('should return the initial state', () => {
        expect(SigninReducer(initialState, {})).toEqual(initialState)
    })

    it('should handle Signin attempt', () => {
        const data = []
        expect(SigninReducer(initialState, {
            type: types.LOGIN_ATTEMPT
        })).toEqual({
            ...initialState,
            attempt: true
        })
    })

    it('should handle Signin', () => {
        const action = { payload: []}
        expect(SigninReducer(initialState, {
            type: types.LOGIN_SUCCESS
        })).toEqual({
            ...initialState,
            data: undefined
        })
    })

    it('should handle Signin failure', () => {
        const data = []
        expect(SigninReducer(initialState, {
            type: types.LOGIN_FAILURE
        })).toEqual({
            ...initialState
        })
    })
})