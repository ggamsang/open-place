import * as types from "actions/ActionTypes";
import host from "config"
import { authGET, POST } from "constant";

// ACTION CREATOR
const GetPointList = data => ({ type: types.GET_POINT_LIST, payload: data });
const PointListFail = () => ({ type: types.GET_POINT_LIST_FAIL, payload: [] });
const GetTotalPointCount = data => ({ type: types.GET_POINT_TOTAL_COUNT, payload: data });
const PointCountFail = () => ({ type: types.GET_POINT_COUNT_FAIL, payload: [] });

const GetCurrentPoint = (data) => ({ type: types.GET_CURRENT_POINT, payload: data });
const GetCurrentPointFailed = (e) => ({ type: types.GET_CURRENT_POINT_FAILED, payload: e });
const ChargeMyPoint = (data) => ({ type: types.CHARGE_MY_POINT, payload: data });
const ChargeMyPointFailed = (e) => ({ type: types.CHARGE_MY_POINT_FAILED, payload: e });

// API
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
        const url = `${host}/point/total/count`;
        return fetch(url, authGET(token))
            .then(res => res.json())
            .then(data =>
                data.success
                    ? dispatch(GetTotalPointCount(data.detail))
                    : GetPointList([]))
            .catch(err => dispatch(PointCountFail()))
    }
};

export const GetCurrentMyPointRequest = (token) => {
    return dispatch => {
        const url = `${host}/point`;
        return fetch(url, authGET(token))
            .then(res => res.json())
            .then(data => dispatch(GetCurrentPoint(data.detail)))
            .catch(err => dispatch(GetCurrentPointFailed(err)))
    }
};
export const ChargeMyPointRequest = (token, point, type) => {
    return dispatch => {
        const url = `${host}/point`;
        return fetch(url, POST(token, { point: point, type: type }))
            .then(res => res.json())
            .then(data => data.success && dispatch(ChargeMyPoint(data.detail)))
            .catch(err => dispatch(ChargeMyPointFailed(err)))
    }
};