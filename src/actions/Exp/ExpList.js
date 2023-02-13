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
    console.log(url);
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
