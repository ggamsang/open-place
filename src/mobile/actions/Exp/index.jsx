import * as types from "../../actions/ActionTypes";
import host from "../../../config";
import { GET, POST, PUT, authGET } from "../../../constants";

export const likeExpRequest = (token, data) => {
  return (dispatch) => {
    dispatch(likeExp());
    const url = `${host}/exp/like`;
    return fetch(url, POST(token, data))
      .then((res) => res.json())
      .then(() => dispatch(likeExpSuccess()))
      .catch((err) => dispatch(likeExpFailure(err)));
  };
};
const likeExp = () => ({ type: types.UPDATE_LIKE_EXP });
const likeExpSuccess = () => ({ type: types.UPDATE_LIKE_EXP_SUCCESS });
const likeExpFailure = (err) => ({ type: types.UPDATE_LIKE_EXP_FAILURE });

export const getExpDetailRequest = (item_id, user_id) => {
  return (dispatch) => {
    dispatch(getExpDetail());
    const url = `${host}/exp/${item_id}/${user_id}`;
    return fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => dispatch(getExpDetailSuccess(data ? data : null)))
      .catch((error) => dispatch(getExpDetailFailure(error)));
  };
};
const getExpDetail = () => ({ type: types.GET_EXP_DETAIL });
const getExpDetailSuccess = (data) => ({
  type: types.GET_EXP_DETAIL_SUCCESS,
  data: data,
});
const getExpDetailFailure = (err) => ({
  type: types.GET_EXP_DETAIL_FAILURE,
  data: err,
});

export const BuyExpRequest = (token, item_id) =>
  new Promise((resolve, reject) => {
    const url = `${host}/user/buy/${item_id}`;
    fetch(url, authGET(token))
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
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

// 메인 페이지 인기 아이템 리스트
// place.opensrcdesign.com/api/
export const getTopExpListRequest = () => {
  return (dispatch) => {
    const url = `${host}/item/TopList`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(getTopExpListSuccess(data ? data : []));
      })
      .catch((error) => dispatch(getTopExpListFailure()));
  };
};
const getTopExpListSuccess = (data) => ({
  type: types.GET_TOP_ITEM_LIST_SUCCESS,
  TopList: data,
});
const getTopExpListFailure = () => ({
  type: types.GET_TOP_ITEM_LIST_FAILURE,
  TopList: [],
});

export const createExpRequest = (data, token) => {
  return (dispatch) => {
    dispatch(createExp());
    const url = `${host}/exp/create`;
    return fetch(url, POST(token, data))
      .then((res) => res.json)
      .then((res) => res && dispatch(createExpSuccess()))
      .catch((err) => dispatch(createExpFailure()));
  };
};
const createExp = () => ({ type: types.PUT_CREATE_EXP });
const createExpSuccess = (data) => ({
  type: types.PUT_CREATE_EXP_SUCCESS,
  data: data,
});
const createExpFailure = () => ({ type: types.PUT_CREATE_EXP_FAILURE });

export const updateExpRequest = (id, data, token) => {
  return (dispatch) => {
    dispatch(updateExp());
    const url = `${host}/exp/${id}`;
    return fetch(url, PUT(token, data))
      .then((res) => res.json)
      .then((res) => res && dispatch(updateExpSuccess()))
      .catch((err) => dispatch(updateExpFailure()));
  };
};
const updateExp = () => ({ type: types.UPDATE_MODIFY_EXP });
const updateExpSuccess = () => ({ type: types.UPDATE_MODIFY_EXP_SUCCESS });
const updateExpFailure = () => ({ type: types.UPDATE_MODIFY_EXP_FAILURE });
