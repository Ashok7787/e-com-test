import * as types from "./AuthActionTypes";
const initialState = {
  logging: false,
  loginError: false,
  user: {},

  fetchingUserDetails: false,
  fetchingUserDetailsError: false,
  userDetails: {},


  
  generatingOtpByEmail: false,
  generatingOtpByEmailError: false,
  otpMsg: {},

  validatingOtpByEmail: false,
  validatingOtpByEmailError: false,
  validateMsg: {},
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, logging: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
      };
    case types.LOGIN_FAILURE:
      return { ...state, logging: false, loginError: true };

    case types.USER_DETAILS_REQUEST:
      return { ...state, fetchingUserDetails: true };
    case types.USER_DETAILS_SUCCESS:
      return {
        ...state,
        fetchingUserDetails: false,
        userDetails: action.payload,
      };

    case types.USER_DETAILS_FAILURE:
      return {
        ...state,
        fetchingUserDetails: false,
        fetchingUserDetailsError: true,
      };

    case types.GENERATE_OTP_BY_EMAIL_REQUEST:
      return { ...state, generatingOtpByEmail: true };
    case types.GENERATE_OTP_BY_EMAIL_SUCCESS:
      return {
        ...state,
        generatingOtpByEmail: false,
        otpMsg: action.payload,
      };
    case types.GENERATE_OTP_BY_EMAIL_FAILURE:
      return {
        ...state,
        generatingOtpByEmail: false,
        generatingOtpByEmailError: true,
      };

    case types.VALIDATE_OTP_BY_EMAIL_REQUEST:
      return { ...state, validatingOtpByEmail: true };
    case types.VALIDATE_OTP_BY_EMAIL_SUCCESS:
      return {
        ...state,
        validatingOtpByEmail: false,
        validateMsg: action.payload,
      };
    case types.VALIDATE_OTP_BY_EMAIL_FAILURE:
      return {
        ...state,
        validatingOtpByEmail: false,
        validatingOtpByEmailError: true,
      };

    default:
      return state;
  }
  return state;
};
