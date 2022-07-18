import * as types from "actions/ActionTypes";
import host from "config";
import { POST, authGET } from "constant";

export const likeExpRequest = (token, data) => {
  return (dispatch) => {
    dispatch(likeExp());
    const url = `${host}/exp/like`;
    return fetch(url, POST(token, data))
      .then(res => res.json())
      .then(() => dispatch(likeExpSuccess()))
      .catch(err => dispatch(likeExpFailure(err)))
  }
}
const likeExp = () => ({ type: types.UPDATE_LIKE_EXP });
const likeExpSuccess = () => ({ type: types.UPDATE_LIKE_EXP_SUCCESS });
const likeExpFailure = (err) => ({ type: types.UPDATE_LIKE_EXP_FAILURE });

export const getExpDetailRequest = (item_id, user_id) => {
  return (dispatch) => {
    dispatch(getExpDetail());
    const url = `${host}/exp/${item_id}/${user_id}`;
    return fetch(url, {
      headers: { "Content-Type": "application/json" }, method: "GET"
    })
      .then(res => res.json())
      .then(data => dispatch(getExpDetailSuccess(data ? data : null)))
      .catch(error => dispatch(getExpDetailFailure(error)));
  }
};
const getExpDetail = () => ({ type: types.GET_EXP_DETAIL });
const getExpDetailSuccess = (data) => ({ type: types.GET_EXP_DETAIL_SUCCESS, data: data });
const getExpDetailFailure = (err) => ({ type: types.GET_EXP_DETAIL_FAILURE, data: err });

export const BuyExpRequest = (token, item_id) =>
  new Promise((resolve, reject) => {
    const url = `${host}/user/buy/${item_id}`;
    fetch(url, authGET(token))
      .then(res => resolve(res))
      .catch(e => reject(e));
  });