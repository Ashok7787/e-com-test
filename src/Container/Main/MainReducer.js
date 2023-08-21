import * as types from "./MainActionTypes";
const initialState = {
 
  fetchingPosts: false,
  fetchingPostsError: false,
  post:[],

  fetchingAddress: false,
  fetchingAddressError: false,
  address:[],

  deletingTopicByUserId:false,
  deletingTopicByUserIdError:false,
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {   
    case types.DELETE_TOPIC_BY_USER_ID_REQUEST:
      return { ...state, deletingTopicByUserId: true };
    case types.DELETE_TOPIC_BY_USER_ID_SUCCESS:
      return { ...state, deletingTopicByUserId: false };
    case types.DELETE_TOPIC_BY_USER_ID_FAILURE:
      return {
        ...state,
        deletingTopicByUserId: false,
        deletingTopicByUserIdError: true,
      };

    case types.GET_POST_REQUEST:
      return { ...state, fetchingPosts: true };
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        fetchingPosts: false,
        post: action.payload,
      };

    case types.GET_POST_FAILURE:
      return { ...state, fetchingAddress: false, fetchingAddressError: true };


      case types.CHECK_ADDRESS_POST_REQUEST:
        return { ...state, fetchingAddress: true };
      case types.CHECK_ADDRESS_POST_SUCCESS:
        return {
          ...state,
          fetchingAddress: false,
          address: action.payload,
        };
  
      case types.CHECK_ADDRESS_POST_FAILURE:
        return { ...state, fetchingAddress: false, fetchingAddressError: true };

    default:
      return state;
  }
  return state;
};
