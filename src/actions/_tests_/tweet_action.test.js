import * as types from '../../constants';
import * as actions from '../tweet.actions';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('tweet actions', () => {
    it('should create an action to initiate a tweet', () => {
        const expected_action = {
            type: types.TWEET_ATTEMPT
        };
        expect(actions.tweetRequest()).toEqual(expected_action)
    })

    it('should create an action to indicate successful tweet', () => {
        const data = {body: "tweet"}
        const expected_action = {
            type: types.TWEET_SUCCESS,
            data
        };
        expect(actions.tweetSuccess(data)).toEqual(expected_action)
    })

    it('should create an action to indicate unsuccessful tweet', () => {
        const error = "Mock error"
        const expected_action = {
            type: types.TWEET_FAILED,
            error
        };
        expect(actions.tweetError(error)).toEqual(expected_action)
    })

})

describe('tweeting', () => {
    const store = mockStore({ data: [] })
    delete window.location;
    window.location = {};

    afterEach(() => {
        fetchMock.restore()
    })

    it('attempts to send a tweet', () => {
        axios.post.mockResolvedValue({status: 201, data: {auth_token: 'sometokenhere'}})
        store.dispatch(actions.tweet({}, history={ push: () => {}}));
        expect(store.getActions()[0].type).toEqual('TWEET_ATTEMPT')
    })

    it('sends a tweet', async () => {
        axios.post.mockResolvedValue({status: 201, data: {auth_token: 'sometokenhere'}})
        await store.dispatch(actions.tweet({}, history={ push: () => {}}));
        expect(store.getActions()[1].type).toEqual('TWEET_SUCCESS')
    })

    it('fails to send a tweet', async () => {
        axios.post.mockResolvedValue()
        await store.dispatch(actions.tweet());
        expect(store.getActions()[5].type).toEqual('TWEET_FAILED')
    })
})