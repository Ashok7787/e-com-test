import { API_URL, base_url, login_url } from "../../Config/Auth";
import * as types from "./AuthActionTypes";
import axios from "axios";
import { message, notification } from "antd";
import { createBrowserHistory } from "history";
import { useAccount } from "wagmi";
const history = createBrowserHistory();

export const registerUser = (user) => (dispatch) => {
  const { isConnected, address, isDisconnected } = useAccount();
  dispatch({
    type: types.REGISTER_REQUEST,
  });
  axios
    .post(
      `${API_URL}/user`,
      { ...user }
      // {
      //   headers: {
      //     Authorization: "Bearer " + sessionStorage.getItem("token") || "",
      //   },
      // }
    )
    .then((res) => {
      console.log(res);
      dispatch(userDetails(`${address}`));
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.REGISTER_FAILURE,
        payload: err,
      });
    });
};

export const userDetails = (address) => (dispatch) => {
  dispatch({
    type: types.USER_DETAILS_REQUEST,
  });
  axios
    .get(
      `${API_URL}/user/${address}`
      // {
      //   headers: { Authorization: `Bearer ${accessToken}` },
      // }
    )

    .then((res) => {
      console.log(res);
      if(res.data.success === true){
      sessionStorage.setItem("userDetails", JSON.stringify(res.data.success));
      sessionStorage.setItem(
        "dp2p-token",
        JSON.stringify(res.data.userDetail.token)
      );
    }
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
