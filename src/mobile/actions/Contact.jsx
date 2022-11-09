import * as types from "./ActionTypes";
import host from "src/config";
import { GET, POST, PUT, DELETE } from "src/constants";

// C
export function CreateExpContactRequest(token, data) {
  return (dispatch) => {
    const url = `${host}/contact`;
    return fetch(url, POST(token, data))
      .then((res) => res.json())
      .then((data) => dispatch(CreateExpContactSuccess()) && data)
      .catch((err) => dispatch(CreateExpContactFailure(err)));
  };
}
const CreateExpContactSuccess = () => ({ type: types.CREATE_CONTACT_SUCCESS });
const CreateExpContactFailure = (err) => ({
  type: types.CREATE_CONTACT_FAILURE,
  error: err,
});
// R
export function GetExpContactListRequest(id) {
  return (dispatch) => {
    const url = `${host}/contact/${id}`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => dispatch(GetExpContactListSuccess(data)))
      .catch((err) => dispatch(GetExpContactListFailure(err)));
  };
}
const GetExpContactListSuccess = (data) => ({
  type: types.GET_CONTACT_LIST_SUCCESS,
  contacts: data.detail,
});
const GetExpContactListFailure = (err) => ({
  type: types.GET_CONTACT_LIST_FAILURE,
  error: err,
  contacts: [],
});
// U
export function UpdateExpContactRequest(token, id, data) {
  return (dispatch) => {
    const url = `${host}/contact/${id}`;
    return fetch(url, PUT(token, data))
      .then((res) => res.json())
      .then((data) => dispatch(UpdateExpContactSuccess()) && data)
      .catch((err) => dispatch(UpdateExpContactFailure(err)));
  };
}
const UpdateExpContactSuccess = () => ({ type: types.UPDATE_CONTACT_SUCCESS });
const UpdateExpContactFailure = (err) => ({
  type: types.UPDATE_CONTACT_FAILURE,
  error: err,
});
// D
export function DeleteExpContactRequest(id, token) {
  return (dispatch) => {
    const url = `${host}/contact/${id}`;
    return fetch(url, DELETE(token))
      .then((res) => res.json())
      .then((data) => dispatch(DeleteExpContactSuccess()) && data)
      .catch((err) => dispatch(DeleteExpContactFailure(err)));
  };
}
const DeleteExpContactSuccess = () => ({ type: types.DELETE_CONTACT_SUCCESS });
const DeleteExpContactFailure = (err) => ({
  type: types.DELETE_CONTACT_FAILURE,
  error: err,
});

export function GetExpContactRequest(id) {
  return (dispatch) => {
    const url = `${host}/contact/detail/${id}`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => dispatch(GetExpContactSuccess(data)))
      .catch((err) => dispatch(GetExpContactFailure(err)));
  };
}
const GetExpContactSuccess = (data) => ({
  type: types.GET_CONTACT_SUCCESS,
  detail: data.detail,
});
const GetExpContactFailure = (err) => ({
  type: types.GET_CONTACT_FAILURE,
  error: err,
  detail: null,
});
