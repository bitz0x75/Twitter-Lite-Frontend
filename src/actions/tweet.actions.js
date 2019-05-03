import {TWEET_ATTEMPT, TWEET_FAILED, TWEET_SUCCESS} from '../constants';
import axios from 'axios';

export const tweetRequest = () => ({
    type: TWEET_ATTEMPT
})

export const tweetError = (error) => ({
    type: TWEET_FAILED,
    error
})

export const tweetSuccess = (data) => ({
    type: TWEET_SUCCESS,
    data
})

export const tweet = (data, history) => dispatch => {
    console.log('Testing')
    dispatch(tweetRequest())
    const url = "http://localhost:3000/tweets";
    const token = localStorage.getItem('user')
    console.log(token)
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*'
    }
    return axios
        .post(
            url,
            data,
            {headers: headers},
          )
        .then(response => {
            // console.log('hfhghgcvbxgcbcvv', response)
            console.log(response);
            if (response.status === 201){
                dispatch(tweetSuccess(response.data))
            }
        })
        .catch(error => dispatch(tweetError(error)))
}

export const tweetActions = {
    tweetRequest,
    tweetError,
    tweetSuccess,
    tweet
}

export default tweetActions;

