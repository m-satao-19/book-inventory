import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './UserTypes'
import axios from 'axios';

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUserRequest());
        fetch("http://localhost:8080/users")
            .then(response=>response.json())
            .then(response => {
                //console.log("response  "+response.data);
                dispatch(fetchUserSuccess(response));
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message));
            });
    };
};

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    };
};

const fetchUserSuccess = user => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    };
};

const fetchUserFailure =error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    };
};