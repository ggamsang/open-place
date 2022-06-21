import * as types from "actions/ActionTypes";
import host from "config";

export const getUserDetailRequest = (user_id) => {
    return dispatch =>{
        dispatch(getUserDetail());
        const url = `${host}/user/detail/${user_id}`;
        return fetch(url, {
          headers: { "Content-Type": "application/json" }, method: "GET"
        })
          .then(res=>res.json())
          .then(data=>data&&dispatch(getUserDetailSuccess(data?data:null)))
          .catch(err=>dispatch(getUserDetailFailure(err)))
    }
  };
  const getUserDetail = () => ({ type: types.GET_USER_DETAIL });
  const getUserDetailSuccess = (data) => ({ type: types.GET_USER_DETAIL_SUCCESS,user_detail:data });
  const getUserDetailFailure = (err) => ({ type: types.GET_USER_DETAIL_FAILURE,user_detail:null,err:err });

  