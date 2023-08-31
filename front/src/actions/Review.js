import * as types from "actions/ActionTypes";
import host from "config";
import { GET, POST, PUT, DELETE } from "constant";

// C
export function CreateExpReviewRequest(token, data) {
  return (dispatch) => {
    const url = `${host}/review`;
    return fetch(url, POST(token, data))
      .then((res) => res.json())
      .then((data) => dispatch(CreateExpReviewSuccess()) && data)
      .catch((err) => dispatch(CreateExpReviewFailure(err)));
  };
}
const CreateExpReviewSuccess = () => ({ type: types.CREATE_REVIEW_SUCCESS });
const CreateExpReviewFailure = (err) => ({
  type: types.CREATE_REVIEW_FAILURE,
  error: err,
});
// R
export function GetExpReviewListRequest(id) {
  return (dispatch) => {
    const url = `${host}/review/${id}`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => dispatch(GetExpReviewListSuccess(data)))
      .catch((err) => dispatch(GetExpReviewListFailure(err)));
  };
}
const GetExpReviewListSuccess = (data) => ({
  type: types.GET_REVIEW_LIST_SUCCESS,
  reviews: data.detail,
});
const GetExpReviewListFailure = (err) => ({
  type: types.GET_REVIEW_LIST_FAILURE,
  error: err,
  reviews: [],
});
// U
export function UpdateExpReviewRequest(token, id, data) {
  return (dispatch) => {
    const url = `${host}/review/${id}`;
    return fetch(url, PUT(token, data))
      .then((res) => res.json())
      .then((data) => dispatch(UpdateExpReviewSuccess()) && data)
      .catch((err) => dispatch(UpdateExpReviewFailure(err)));
  };
}
const UpdateExpReviewSuccess = () => ({ type: types.UPDATE_REVIEW_SUCCESS });
const UpdateExpReviewFailure = (err) => ({
  type: types.UPDATE_REVIEW_FAILURE,
  error: err,
});
// D
export function DeleteExpReviewRequest(id, token) {
  return (dispatch) => {
    const url = `${host}/review/${id}`;
    return fetch(url, DELETE(token))
      .then((res) => res.json())
      .then((data) => dispatch(DeleteExpReviewSuccess()) && data)
      .catch((err) => dispatch(DeleteExpReviewFailure(err)));
  };
}
const DeleteExpReviewSuccess = () => ({ type: types.DELETE_REVIEW_SUCCESS });
const DeleteExpReviewFailure = (err) => ({
  type: types.DELETE_REVIEW_FAILURE,
  error: err,
});

export function GetExpReviewRequest(id) {
  return (dispatch) => {
    const url = `${host}/review/detail/${id}`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => dispatch(GetExpReviewSuccess(data)))
      .catch((err) => dispatch(GetExpReviewFailure(err)));
  };
}
const GetExpReviewSuccess = (data) => ({
  type: types.GET_REVIEW_SUCCESS,
  detail: data.detail,
});
const GetExpReviewFailure = (err) => ({
  type: types.GET_REVIEW_FAILURE,
  error: err,
  detail: null,
});
