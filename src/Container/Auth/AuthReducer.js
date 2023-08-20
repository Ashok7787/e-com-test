import * as types from "./AuthActionTypes";
const initialState = {
  register: false,
  registerError: false,
  user: {},

  fetchingUserDetails: false,
  fetchingUserDetailsError: false,
  userDetails: {},
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return { ...state, register: true };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        register: false,
      };
    case types.REGISTER_FAILURE:
      return { ...state, register: false, registerError: true };

    case types.USER_DETAILS_REQUEST:
      return { ...state, fetchingUserDetails: true };
    case types.USER_DETAILS_SUCCESS:
      return {
        ...state,
        fetchingUserDetails: false,
        userDetails: action.payload,
      };

    case types.USER_DETAILS_FAILURE:
      return { ...state, fetchingUserDetails: false, fetchingUserDetailsError: true };

    default:
      return state;
  }
  return state;
};
