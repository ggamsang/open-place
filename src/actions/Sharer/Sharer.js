import * as types from "actions/ActionTypes";
import host from "config";
import { GET,DELETE } from "constant";

export const getSharerRequest = (user_id) => {
    return (dispatch) => {
        dispatch(getSharer())
        const url = `${host}/sharer/detail/${user_id}`;
        return fetch(url, GET)
            .then(res => res.json())
            .then(data => {
                dispatch(getSharerSuccess(data ? data : []))
            }
            )
            .catch(err => dispatch(getSharerFailure(err)));
    }
};
const getSharer = () => ({ type: types.GET_SHARER_DETAIL });
const getSharerSuccess = (data) => ({ type: types.GET_SHARER_DETAIL_SUCCESS, sharer: data.data });
const getSharerFailure = (err) => ({ type: types.GET_SHARER_DETAIL_FAILURE, sharer: null, err: err });

export const deleteSharerRequest = (token,user_id) => {
    return (dispatch) => {
        dispatch(deleteSharer())
        const url = `${host}/sharer/delete/${user_id}`;
        return fetch(url, DELETE(token) )
            .then(res => res.json())
            .then((data) => {
                dispatch(deleteSharerSuccess())
            }
            )
            .catch(err => dispatch(deleteSharerFailure()));
    }
};
const deleteSharer = () => ({ type: types.DELETE_SHARER });
const deleteSharerSuccess = () => ({ type: types.DELETE_SHARER_SUCCESS });
const deleteSharerFailure = () => ({ type: types.DELETE_SHARER_FAILURE });