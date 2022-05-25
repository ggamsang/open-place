import * as types from "actions/ActionTypes";
import host from "config";
// const host = "https://place.opensrcdesign.com/api/";

// 메인 페이지 인기 아이템 리스트
// place.opensrcdesign.com/api/
export const GetTopItemListRequest = () => {
    return (dispatch) => {
      const url = `${host}/item/TopList`;
      return fetch(url, {
        headers: { "Content-Type": "application/json" }, method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          dispatch(GetTopItemListSuccess(data ? data : []))
        }
          )
        .catch(error => dispatch(GetTopItemListFailure()));
    }
  };
  const GetTopItemListSuccess = (data) => ({ type: types.GET_TOP_ITEM_LIST_SUCCESS, TopList: data });
  const GetTopItemListFailure = () => ({ type: types.GET_TOP_ITEM_LIST_FAILURE, TopList: [] });
  