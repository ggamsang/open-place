import * as types from "actions/ActionTypes";
import host from "config";
import { GET } from "constant";

// 메인 페이지 인기 아이템 리스트
// place.opensrcdesign.com/api/
export const getTopExpListRequest = () => {
    return (dispatch) => {
      const url = `${host}/item/TopList`;
      return fetch(url, {
        headers: { "Content-Type": "application/json" }, method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          dispatch(getTopExpListSuccess(data ? data : []))
        }
          )
        .catch(error => dispatch(getTopExpListFailure()));
    }
  };
  const getTopExpListSuccess = (data) => ({ type: types.GET_TOP_ITEM_LIST_SUCCESS, TopList: data });
  const getTopExpListFailure = () => ({ type: types.GET_TOP_ITEM_LIST_FAILURE, TopList: [] });
