import { base_url, login_url } from "../../Config/Auth";
import * as types from "./AuthActionTypes";
import axios from "axios";
import { message, notification } from "antd";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();


export const logout = (history) => (dispatch) => {
  window.sessionStorage.clear();
  window.localStorage.clear();
  window.location.reload();
 // history.push("/login");
  dispatch({ type: types.LOGOUT });
  message.success("You have successfully logged out. See you soon.");
};

export const login = (email, password) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  axios
    .post(`${login_url}/users/login`, email, password)

    .then((res) => {
      console.log(res);
     // history.push("/");
    // dispatch(userDetails(res.data.accessToken));
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err && err.response && err.response.data);
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err,
      });
    });
};

export const userDetails = (accessToken) => (dispatch) => {
  dispatch({
    type: types.USER_DETAILS_REQUEST,
  });
  axios
    .get(`${base_url}/users/current`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    .then((res) => {
      console.log(res);

      dispatch({
        type: types.USER_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err && err.response && err.response.data);
      dispatch({
        type: types.USER_DETAILS_FAILURE,
        payload: err,
      });
    });
};


export const generateOtpByEmail = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: types.GENERATE_OTP_BY_EMAIL_REQUEST });
  axios
    .post(`${base_url}/api/otp/generateOTP`, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.GENERATE_OTP_BY_EMAIL_SUCCESS,
        payload: res.data,
      });
      message.success("Otp has been sent to verified email Id")
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.GENERATE_OTP_BY_EMAIL_FAILURE });
    });
};

export const validateOtp = (data) => (dispatch) => {
  console.log(data);
  dispatch({ type: types.VALIDATE_OTP_BY_EMAIL_REQUEST });
  axios
    .post(`${base_url}/api/otp/validateOtp`, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.VALIDATE_OTP_BY_EMAIL_SUCCESS,
        payload: res.data,
      });
      message.success(res.data.status)
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.VALIDATE_OTP_BY_EMAIL_FAILURE
      });
      message.error("Invalid Otp");
    });

};