import { FETCH_HASHTAG_ATTEMPT, FETCH_HASHTAG_FAILED, FETCH_HASHTAG_SUCCESS } from '../constants';
import axios from 'axios';

export const fetchHashTagRequest = () => ({
    type: FETCH_HASHTAG_ATTEMPT
});

export const fetchHashTagFailure = (error) => ({
    type: FETCH_HASHTAG_FAILED,
    error
});

export const fetchHashTagSuccess = (payload) => ({
    type: FETCH_HASHTAG_SUCCESS,
    payload
});

export const fetchHashTags = (hashTag) => dispatch => {
    dispatch(fetchHashTagRequest())
    const url = `http://localhost:3000/tweet/${hashTag}`;
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
                dispatch(fetchHashTagSuccess(response.data))
            }
        })
        .catch(error => dispatch(fetchHashTagFailure(error)))
}