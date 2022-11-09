import * as types from "src/mobile/actions/ActionTypes";
import host from "src/config";
import { GET } from "src/constants";

// 디폴트 카테고리 불러오기
export const getCategoryListRequest = () => {
    return (dispatch) => {
        const url = `${host}/defaultList/category`;
        return fetch(url, GET)
            .then(res => res.json())
            .then(data => {
                dispatch(getCategoryListSuccess(data ? data : []))
            }
            )
            .catch(error => dispatch(getCategoryListFailure()));
    }
};
const getCategoryListSuccess = (data) => ({ type: types.GET_DEFAULT_CATEGORY_SUCCESS, category: data });
const getCategoryListFailure = () => ({ type: types.GET_DEFAULT_CATEGORY_FAILURE, category: [] });

// 디폴트 경험 게시 종류 불러오기
export const getExpTypeListReqeuest = () => {
    return (dispatch) => {
        const url = `${host}/defaultList/exptype`;
        return fetch(url, GET)
            .then(res => res.json())
            .then(data => {
                dispatch(getExpTypeListSuccess(data ? data : []))
            }
            )
            .catch(error => dispatch(getExpTypeListFailure()));
    }
};
const getExpTypeListSuccess = (data) => ({ type: types.GET_DEFAULT_EXP_TYPE_SUCCESS, exp_type: data });
const getExpTypeListFailure = () => ({ type: types.GET_DEFAULT_EXP_TYPE_FAILURE, exp_type: [] });

// 디폴트 은행코드 불러오기
export const getBankCodeListReqeust = () => {
    return (dispatch) => {
        const url = `${host}/defaultList/bankcode`;
        return fetch(url, GET)
            .then(res => res.json())
            .then(data => {
                dispatch(getBankCodeListSuccess(data ? data : []))
            }
            )
            .catch(error => dispatch(getBankCodeListFailure()));
    }
};
const getBankCodeListSuccess = (data) => ({ type: types.GET_DEFAULT_BANKCODE_SUCCESS, bank_code: data });
const getBankCodeListFailure = () => ({ type: types.GET_DEFAULT_BANKCODE_FAILURE, bank_code: [] });

// 디폴트 은행코드 불러오기
export const getLocationListRequest = () => {
    return (dispatch) => {
        const url = `${host}/defaultList/location`;
        return fetch(url, GET)
            .then(res => res.json())
            .then(data => dispatch(getLocationListSuccess(data ? data : [])))
            .catch(error => dispatch(getLocationListFailure()));
    }
};
const getLocationListSuccess = (data) => ({ type: types.GET_DEFAULT_LOCATION_SUCCESS, location: data });
const getLocationListFailure = () => ({ type: types.GET_DEFAULT_LOCATION_FAILURE, location: [] });