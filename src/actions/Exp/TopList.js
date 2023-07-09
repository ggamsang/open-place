import * as types from "actions/ActionTypes";
import host from "config";
import { GET } from "constant";

// 메인 페이지 인기 아이템 리스트
// place.opensrcdesign.com/api/
export const getTopExpListRequest = (page = 0) => {
  return (dispatch) => {
    const url = `${host}/item/TopList/${page}`;
    console.log(url)
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(
          page === 0
            ? getTopExpListSuccess(data ? data : [])
            : getTopExpListAddedSuccess(data ? data : [])
        );
      })
      .catch((error) => dispatch(getTopExpListFailure()));
  };
};
const getTopExpListSuccess = (data) => ({
  type: types.GET_TOP_ITEM_LIST_SUCCESS,
  TopList: data,
});
const getTopExpListAddedSuccess = (data) => ({
  type: types.GET_TOP_ITEM_LIST_SUCCESS_ADDED,
  TopList: data,
});
const getTopExpListFailure = () => ({
  type: types.GET_TOP_ITEM_LIST_FAILURE,
  TopList: [],
});
