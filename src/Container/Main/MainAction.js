import { base_url, login_url } from "../../Config/Auth";
import * as types from "./MainActionTypes";
import axios from "axios";
import { message, notification } from "antd";

export const getOrders = (postcode) => (dispatch) => {
  dispatch({
    type: types.GET_POST_REQUEST,
  });
  axios
    .post(
      "https://broadbandbroker.co.uk/poptelecom/public/api/get-address-details",
      { postcode },
      {
        headers: { Authorization: `Bearer Bearer POPTELECOM@987612` },
      }
    )

    .then((res) => {
      // sessionStorage.setItem("userDetails", JSON.stringify(res.data));
      console.log(res.data[0].response.data);

      dispatch({
        type: types.GET_POST_SUCCESS,
        payload: res.data[0].response.data,
      });
    })
    .catch((err) => {
      console.log(err && err.response && err.response.data);
      dispatch({
        type: types.GET_POST_FAILURE,
        payload: err,
      });
    });
};

export const checkAddress = (postcode) => (dispatch) => {
  dispatch({
    type: types.CHECK_ADDRESS_POST_REQUEST,
  });
  axios
    .post(
      "https://broadbandbroker.co.uk/poptelecom/public/api/check-address",
      { postcode },
      {
        headers: { Authorization: `Bearer Bearer POPTELECOM@987612` },
      }
    )

    .then((res) => {
      // sessionStorage.setItem("userDetails", JSON.stringify(res.data));
      console.log(res.data[0].response.data);

      dispatch({
        type: types.CHECK_ADDRESS_POST_SUCCESS,
        payload: res.data[0].response.data,
      });
    })
    .catch((err) => {
      console.log(err && err.response && err.response.data);
      dispatch({
        type: types.CHECK_ADDRESS_POST_FAILURE,
        payload: err,
      });
    });
};
export const deleteTopicByUserId = (topicId, userId) => (dispatch) => {
  dispatch({
    type: types.DELETE_TOPIC_BY_USER_ID_REQUEST,
  });
  axios
    .delete(
      `${base_url}/topic/${topicId}`
      // {
      //   headers: {
      //     Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      //   },
      // }
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.DELETE_TOPIC_BY_USER_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.DELETE_TOPIC_BY_USER_ID_FAILURE,
        payload: err,
      });
    });
};
