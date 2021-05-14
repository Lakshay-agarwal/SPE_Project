import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
// import { withRouter } from 'react-router-dom';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

export const registerUser = (userData, history) => dispatch => {
    axios
      .post("http://localhost:5000/users/register", userData)
      .then(/*res => history.push("/login")*/ res => console.log(res))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };


export const loginUser = userData => dispatch => {
    axios
      .post("http://localhost:5000/users/login", userData)
      .then(res => {
        // Save to localStorage
        
        // Set token to localStorage
        const { token } = res.data;
        console.log(token)
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
    // .catch(function(error){
    //     console.log(error.request);
    // })
      );
  };

  export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

  export const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
  };

  export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };