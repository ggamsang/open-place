import * as types from "actions/ActionTypes";
import host from "config"
import { authGET } from "constant";

// action creators
const GetPointList = data => ({ type: types.GET_POINT_LIST, payload: data });
const PointListFail = () => ({ type: types.GET_POINT_LIST_FAIL, payload: [] });
const GetTotalPointCount = data => ({ type: types.GET_POINT_TOTAL_COUNT, payload: data });
const PointCountFail = () => ({ type: types.GET_POINT_COUNT_FAIL, payload: [] });

// api
export const GetPointListRequest = (page, token) => {
    return dispatch => {
        const url = `${host}/point/${page}`;
        return fetch(url, authGET(token))
            .then(res => res.json())
            .then(data =>
                data.success
                    ? dispatch(GetPointList(data.detail))
                    : GetPointList([]))
            .catch(err => dispatch(PointListFail()))
    }
};
export const GetTotalPointCountRequest = (token) => {
    return dispatch => {
        const url = `${host}/point`;
        return fetch(url, authGET(token))
            .then(res => res.json())
            .then(data =>
                data.success
                    ? dispatch(GetTotalPointCount(data.detail))
                    : GetPointList([]))
            .catch(err => dispatch(PointCountFail()))
    }
};