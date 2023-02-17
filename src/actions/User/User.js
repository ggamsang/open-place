import * as types from "actions/ActionTypes";
import host from "config";
import { GET } from "constant";

export const updateUserRequest = (user_id, data, token) => {
  return (dispatch) => {
    dispatch(updateUser());
    const url = `${host}/user/update/${user_id}`;
    console.log(url, data);
    return fetch(url, {
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => dispatch(updateUserSuccess()))
      .catch((err) => dispatch(updateUserFailure(err)));
  };
};
const updateUser = () => ({ type: types.UPDATE_USER_PROFILE });
const updateUserSuccess = () => ({ type: types.UPDATE_USER_PROFILE_SUCCESS });
const updateUserFailure = (err) => ({
  type: types.UPDATE_USER_PROFILE_FAILURE,
});

export const getIsMyLikeRequest = (user_id, like_id, type) => {
  return (dispatch) => {
    const url = `${host}/user/like/${user_id}/${like_id}/${type}`;
    console.log(url);
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getIsMyLikeSuccess(data));
      })
      .catch((error) => dispatch(getIsMyLikeFailure()));
  };
};
const getIsMyLikeSuccess = (data) => ({
  type: types.GET_USER_LIKE_THIS_SUCCESS,
  data: data,
});
const getIsMyLikeFailure = (err) => ({
  type: types.GET_USER_LIKE_THIS_FAILURE,
});
