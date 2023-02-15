import * as types from "actions/ActionTypes";
import host from "config";
import { GET } from "constant";

// 메인 페이지 인기 아이템 리스트
// place.opensrcdesign.com/api/

// 1: 놀기 2: 배우기 3: 만들기
export const getExpListRequest = (
  page = 0,
  category = null,
  sort = null,
  keyword = null
) => {
  return (dispatch) => {
    dispatch(getExpList());
    const url = `${host}/item/${page}/${category}/${sort}/${keyword}`;
    console.log("getExpListRequest", url);
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return dispatch(
          page === 0
            ? getExpListPageZero(data ? data : [])
            : getExpListSuccess(data ? data : [])
        );
      })
      .catch((error) => dispatch(getExpListFailure(error)));
  };
};
const getExpList = () => ({ type: types.GET_EXP_LIST });
const getExpListPageZero = (data) => {
  return { type: types.GET_EXP_LIST_ZERO, list: data };
};
const getExpListSuccess = (data) => ({
  type: types.GET_EXP_LIST_SUCCESS,
  list: data,
});
const getExpListFailure = (err) => ({
  type: types.GET_EXP_LIST_FAILURE,
  list: [],
});
export const setEmptyExpListRequest = () => {
  return (dispatch) => {
    dispatch(setEmptyExpList());
  };
};
const setEmptyExpList = () => ({ type: types.SET_EMPTY_EXP_LIST });
export const getExpTagListRequest = (category = 1) => {
  return (dispatch) => {
    dispatch(getExpTagList());
    const url = `${host}/item/tags/${category}`;
    console.log(url);
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) =>
        dispatch(getExpTagListSuccess(data?.map((tag) => tag) || []))
      )
      .catch((error) => dispatch(getExpTagListFailure(error)));
  };
};
const getExpTagList = () => ({ type: types.GET_EXP_TAG_LIST });
const getExpTagListSuccess = (data) => ({
  type: types.GET_EXP_TAG_LIST_SUCCESS,
  list: data,
});
const getExpTagListFailure = (err) => ({
  type: types.GET_EXP_TAG_LIST_FAILURE,
  list: [],
});
