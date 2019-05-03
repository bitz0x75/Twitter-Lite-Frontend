import { FETCH_TWEET_ATTEMPT, FETCH_TWEET_FAILED, FETCH_TWEET_SUCCESS } from '../constants';
import axios from 'axios';

export const fetchTweetRequest = () => ({
    type: FETCH_TWEET_ATTEMPT
});

export const fetchTweetFailure = (error) => ({
    type: FETCH_TWEET_FAILED,
    error
});

export const fetchTweetSuccess = (payload) => ({
    type: FETCH_TWEET_SUCCESS,
    payload
});

export const fetchTweets = () => dispatch => {
    dispatch(fetchTweetRequest())
    const url = "http://localhost:3000/tweets";
    const token = localStorage.getItem('user')
    var headers = {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
    }
    return axios
        .get(
            url,
            {headers},
          )
        .then(response => {
            if (response.status === 200){
                dispatch(fetchTweetSuccess(response.data))
            }
        })
        .catch(error => dispatch(fetchTweetFailure(error)))
}