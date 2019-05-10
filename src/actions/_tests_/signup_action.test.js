import * as types from '../../constants';
import * as actions from '../signup.actions';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('registration actions', () => {
    it('should create an action to initiate registration', () => {
        const expected_action = {
            type: types.SIGNUP_ATTEMPT
        };
        expect(actions.signupRequest()).toEqual(expected_action)
    })

    it('should create an action to indicate successful registration', () => {
        const data = {username: "username", email: "email", password: "password"}
        const expected_action = {
            type: types.SIGNUP_SUCCESS,
            data
        };
        expect(actions.signupSuccess(data)).toEqual(expected_action)
    })

    it('should create an action to indicate unsuccessful registration', () => {
        const error = "Mock error"
        const expected_action = {
            type: types.SIGNUP_FAILED,
            error
        };
        expect(actions.signupError(error)).toEqual(expected_action)
    })

})

describe('registration', () => {
    const store = mockStore({ data: [] })

    afterEach(() => {
        fetchMock.restore()
    })

    it('attempts to register a user', () => {
        axios.post.mockResolvedValue({status: 201, data: {auth_token: 'sometokenhere'}})
        store.dispatch(actions.signup({}, history={ push: () => {}}));
        expect(store.getActions()[0].type).toEqual('SIGNUP_ATTEMPT')
    })

    it('signs in a user', async () => {
        axios.post.mockResolvedValue({status: 201, data: {auth_token: 'sometokenhere'}})
        await store.dispatch(actions.signup({}, history={ push: () => {}}));
        expect(store.getActions()[1].type).toEqual('SIGNUP_SUCCESS')
    })

    it('fails to sign in a user', async () => {
        axios.post.mockResolvedValue({status: 201})
        await store.dispatch(actions.signup({}, history={ push: () => {}}));
        expect(store.getActions()[5].type).toEqual('SIGNUP_FAILED')
    })
})