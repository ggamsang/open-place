import * as types from "actions/ActionTypes";
import host from "config"

// action creators
const GetNoticeList = data => ({ type: types.GET_NOTICE_LIST, payload: data });
const NoticeListFail = () => ({ type: types.GET_NOTICE_LIST_FAIL, payload: [] });
const GetTotalNoticeCount = data => ({ type: types.GET_NOTICE_TOTAL_COUNT, payload: data });
const NoticeCountFail = () => ({ type: types.GET_NOTICE_COUNT_FAIL, payload: [] });

// api
export const GetNoticeListRequest = (page) => {
  return dispatch => {
    const url = `${host}/notice/list/${page}`;
    return fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    })
      .then(res => res.json())
      .then(data =>
        data.success
          ? dispatch(GetNoticeList(data.detail))
          : GetNoticeList([]))
      .catch(err => dispatch(NoticeListFail()))
  }
};
export const GetTotalNoticeCountRequest = () => {
  return dispatch => {
    const url = `${host}/notice/list`;
    return fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    })
      .then(res => res.json())
      .then(data =>
        data.success
          ? dispatch(GetTotalNoticeCount(data.detail.total))
          : GetNoticeList([]))
      .catch(err => dispatch(NoticeCountFail()))
  }
};
