import * as types from '../../constants';
import * as actions from '../signin.actions';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('signin actions', () => {
    it('should create an action to initiate signing in', () => {
        const expected_action = {
            type: types.LOGIN_ATTEMPT
        };
        expect(actions.loginRequest()).toEqual(expected_action)
    })

    it('should create an action to indicate successful signing in', () => {
        const data = {username: "username", password: "password"}
        const expected_action = {
            type: types.LOGIN_SUCCESS,
            data
        };
        expect(actions.loginSuccess(data)).toEqual(expected_action)
    })

    it('should create an action to indicate unsuccessful signing in', () => {
        const error = "Mock error"
        const expected_action = {
            type: types.LOGIN_FAILED,
            error
        };
        expect(actions.loginError(error)).toEqual(expected_action)
    })

})

describe('signing in', () => {
    const store = mockStore({ data: [] })

    afterEach(() => {
        fetchMock.restore()
    })

    it('attempts to sign in a user', () => {
        axios.post.mockResolvedValue({status: 200, data: {auth_token: 'sometokenhere'}})
        store.dispatch(actions.login({}, history={ push: () => {}}));
        expect(store.getActions()[0].type).toEqual('LOGIN_ATTEMPT')
    })

    it('signs in a user', async () => {
        axios.post.mockResolvedValue({status: 200, data: {auth_token: 'sometokenhere'}})
        await store.dispatch(actions.login({}, history={ push: () => {}}));
        expect(store.getActions()[1].type).toEqual('LOGIN_SUCCESS')
    })

    it('fails to sign in a user', async () => {
        axios.post.mockResolvedValue({status: 200})
        await store.dispatch(actions.login({}, history={ push: () => {}}));
        expect(store.getActions()[5].type).toEqual('LOGIN_FAILED')
    })
})