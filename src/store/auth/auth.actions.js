// Auth Actions here
import axios from "axios";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

export const signin = (creds) => (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });

  axios.post("https://reqres.in/api/login", creds).then((r) => {
    dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: r.data });
  }).catch(()=>{
      dispatch({ type: AUTH_SIGN_IN_ERROR });
})

};

export const signout =
  () =>
  ({ type: AUTH_SIGN_OUT });
