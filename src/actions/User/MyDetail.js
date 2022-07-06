import * as types from "actions/ActionTypes";
import host from "config";
import { authGET, GET } from "constant";

// function
// getUserPointRequest - 내 포인트 
// setUserPointRequest - 포인트 수정
// getUserPointHistory - 포인트 내역

// getUserBoughtExpRequest - 내가 구매한 경험목록 요청
// getUserRegisterExpRequest - 내 등록 경험
// getUserSellExpRequest - 내 판매 경험

// getUserLikeSharerRequest - 좋아하는 공유자
// getUserLikeExpRequest - 좋아하는 경험


export const getUserPointRequest = (user_id) => {
  return dispatch => {
    dispatch(getUserPoint());
    const url = `${host}/user/point/${user_id}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data => {
        data && dispatch(getUserPointSuccess(data ? data : null))
      })
      .catch(err => dispatch(getUserPointFailure(err)))
  }
};
const getUserPoint = () => ({ type: types.GET_USER_POINT });
const getUserPointSuccess = (data) => ({ type: types.GET_USER_POINT_SUCCESS, user_point: data });
const getUserPointFailure = (err) => ({ type: types.GET_USER_POINT_FAILURE, user_point: null, err: err });


export const setUserPointRequest = (user_id, data, token) => {
  return dispatch => {
    dispatch(setUserPoint());
    const url = `${host}/user/point/add/${user_id}`;
    return fetch(url, {
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        data && dispatch(setUserPointSuccess())
      })
      .catch(err => dispatch(setUserPointFailure(err)))
  }
};
const setUserPoint = () => ({ type: types.SET_USER_POINT });
const setUserPointSuccess = () => ({ type: types.SET_USER_POINT_SUCCESS });
const setUserPointFailure = (err) => ({ type: types.SET_USER_POINT_FAILURE, err: err });

export const getUserPointHistoryReqeust = (user_id, page) => {
  return dispatch => {
    dispatch(getUserPointHistory());
    const url = `${host}/user/point/history/${user_id}/${page}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data => {
        data && dispatch(getUserPointHistorySuccess(data))
      })
      .catch(err => dispatch(getUserPointHistoryFailure(err)))
  }
};
const getUserPointHistory = () => ({ type: types.GET_USER_POINT_HISTORY });
const getUserPointHistorySuccess = (data) => ({ type: types.GET_USER_POINT_HISTORY_SUCCESS, history: data });
const getUserPointHistoryFailure = (err) => ({ type: types.GET_USER_POINT_HISTORY_FAILURE, err: err });


export const getUserRegisterExpRequest = (user_id, page) => {
  return dispatch => {
    dispatch(getUserRegisterExp());
    const url = `${host}/user/exp/register/${user_id}/${page}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data && dispatch(getUserRegisterExpSuccess(data))
      })
      .catch(err => dispatch(getUserRegisterExpFailure(err)))
  }
};
const getUserRegisterExp = () => ({ type: types.GET_USER_REGISTER_EXP });
const getUserRegisterExpSuccess = (data) => ({ type: types.GET_USER_REGISTER_EXP_SUCCESS, list: data });
const getUserRegisterExpFailure = (err) => ({ type: types.GET_USER_REGISTER_EXP_FAILURE, err: err });

export const getUserSellExpRequest = (user_id, page) => {
  return dispatch => {
    dispatch(getUserSellExp());
    const url = `${host}/user/exp/sell/${user_id}/${page}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data && dispatch(getUserSellExpSuccess(data))
      })
      .catch(err => dispatch(getUserSellExpFailure(err)))
  }
};
const getUserSellExp = () => ({ type: types.GET_USER_SELL_EXP });
const getUserSellExpSuccess = (data) => ({ type: types.GET_USER_SELL_EXP_SUCCESS, list: data });
const getUserSellExpFailure = (err) => ({ type: types.GET_USER_SELL_EXP_FAILURE, err: err });

export const getUserLikeExpRequest = (user_id, page) => {
  return dispatch => {
    dispatch(getUserLikeExp());
    const url = `${host}/user/like/exp/${user_id}/${page}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data && dispatch(getUserLikeExpSuccess(data))
      })
      .catch(err => dispatch(getUserLikeExpFailure(err)))
  }
};
const getUserLikeExp = () => ({ type: types.GET_USER_LIKE_EXP });
const getUserLikeExpSuccess = (data) => ({ type: types.GET_USER_LIKE_EXP_SUCCESS, list: data });
const getUserLikeExpFailure = (err) => ({ type: types.GET_USER_LIKE_EXP_FAILURE, err: err });

export const getUserLikeSharerRequest = (user_id, page) => {
  return dispatch => {
    dispatch(getUserLikeSharer());
    const url = `${host}/user/like/sharer/${user_id}/${page}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data && dispatch(getUserLikeSharerSuccess(data))
      })
      .catch(err => dispatch(getUserLikeSharerFailure(err)))
  }
};
const getUserLikeSharer = () => ({ type: types.GET_USER_LIKE_SHARER });
const getUserLikeSharerSuccess = (data) => ({ type: types.GET_USER_LIKE_SHARER_SUCCESS, list: data });
const getUserLikeSharerFailure = (err) => ({ type: types.GET_USER_LIKE_SHARER_FAILURE, err: err });


export const getUserBoughtExpRequest = (token) => {
  return dispatch => {
    dispatch(getUserBoughtExp());
    const url = `${host}/user/bought`;
    return fetch(url, authGET(token))
      .then(res => res.json())
      .then(data => dispatch(getUserBoughtExpSuccess(data.list)))
      .catch(err => dispatch(getUserBoughtExpFailure(err)))
  }
};
const getUserBoughtExp = () => ({ type: types.GET_USER_BOUGHT_EXP });
const getUserBoughtExpSuccess = (data) => ({ type: types.GET_USER_BOUGHT_EXP_SUCCESS, list: data });
const getUserBoughtExpFailure = (err) => ({ type: types.GET_USER_BOUGHT_EXP_FAILURE, err: err });
