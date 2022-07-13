import * as types from "actions/ActionTypes";
import host from "config";
import { authGET, GET } from "constant";

export const getExpDetailRequest = (item_id) => {
  return (dispatch) => {
    dispatch(getExpDetail());
    const url = `${host}/exp/${item_id}`;
    return fetch(url, GET)
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