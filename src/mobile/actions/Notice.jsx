import * as types from "src/mobile/actions/ActionTypes";
import host from "src/config"
import { GET } from "src/constants";

// action creators
const GetNoticeList = data => ({ type: types.GET_NOTICE_LIST, payload: data });
const NoticeListFail = () => ({ type: types.GET_NOTICE_LIST_FAIL, payload: [] });
const GetTotalNoticeCount = data => ({ type: types.GET_NOTICE_TOTAL_COUNT, payload: data });
const NoticeCountFail = () => ({ type: types.GET_NOTICE_COUNT_FAIL, payload: [] });
const NoticeDetailSuccess = (data) => ({ type: types.NOTICE_DETAIL_SUCCESS, payload: data });
const NoticeDetailFailed = () => ({ type: types.NOTICE_DETAIL_FAILED, });

// api
export const GetNoticeListRequest = (page) => {
  return dispatch => {
    const url = `${host}/notice/list/${page}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data => {
        dispatch(GetNoticeList(data.detail))
        return data.success;
      })
      .catch(err => dispatch(NoticeListFail()))
  }
};
export const GetTotalNoticeCountRequest = () => {
  return dispatch => {
    const url = `${host}/notice/list`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data =>
        data.success
          ? dispatch(GetTotalNoticeCount(data.detail.total))
          : GetNoticeList([]))
      .catch(err => dispatch(NoticeCountFail()))
  }
};
export const GetNoticeDetailRequest = (id) => {
  return dispatch => {
    const url = `${host}/notice/${id}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data => {
        dispatch(NoticeDetailSuccess(data.detail))
        return data.success;
      })
      .catch(err => dispatch(NoticeDetailFailed()))
  }
};