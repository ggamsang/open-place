import * as types from "actions/ActionTypes";
import host from "config";

export const getExpDetailRequest = (item_id) => {
    return (dispatch) => {
      dispatch(getExpDetail());
      const url = `${host}/exp/detail/${item_id}`;
      return fetch(url, {
        headers: { "Content-Type": "application/json" }, method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          dispatch(getExpDetailSuccess(data ? data : null))
        }
          )
        .catch(error =>{
          console.log(error);
          dispatch(getExpDetailFailure(error))
        });
    }
  };
  const getExpDetail = () => ({ type: types.GET_EXP_DETAIL});
  const getExpDetailSuccess = (data) => ({ type: types.GET_EXP_DETAIL_SUCCESS, data: data });
  const getExpDetailFailure = (err) => ({ type: types.GET_EXP_DETAIL_FAILURE, data: err });
