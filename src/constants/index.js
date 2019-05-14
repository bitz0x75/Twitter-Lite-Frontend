//Base URL
export const BASE_URL = process.env.REACT_APP_DOMAIN

//login constants
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

//signup constants
export const SIGNUP_ATTEMPT = 'SIGNUP_ATTEMPT';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

//tweet constants
export const TWEET_ATTEMPT = 'TWEET_ATTEMPT';
export const TWEET_FAILED = 'TWEET_FAILED';
export const TWEET_SUCCESS = 'TWEET_SUCCESS';

// fetch tweet constants
export const FETCH_TWEET_ATTEMPT = 'FETCH_TWEET_ATTEMPT';
export const FETCH_TWEET_FAILED = 'FETCH_TWEET_FAILED';
export const FETCH_TWEET_SUCCESS = 'FETCH_TWEET_SUCCESS';

// Fetch hash_tag constants
export const FETCH_HASHTAG_ATTEMPT = 'FETCH_HASHTAG_ATTEMPT';
export const FETCH_HASHTAG_FAILED = 'FETCH_HASHTAG_FAILED';
export const FETCH_HASHTAG_SUCCESS = 'FETCH_HASHTAG_SUCCESS';

export const initialState = {
    attempt: false,
    data: [],
    error: null
}