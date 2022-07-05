import * as types from "actions/ActionTypes";
import host from "config";
import { GET } from "constant";

// export const getUserDetail = (user_id) => {
//     return dispatch =>{
//         dispatch(getUserDetail());
//         const url = `${host}/sharer/detail/${user_id}`;
//         return fetch(url, {
//           headers: { "Content-Type": "application/json" }, method: "GET"
//         })
//           .then(res=>res.json())
//           .then(data=>data&&dispatch(getUserDetailSuccess(data?data:null)))
//           .catch(err=>dispatch(getUserDetailFailure(err)))
//     }
//   };
//   const getUserDetail = () => ({ type: types.GET_SHARER_DETAIL });
//   const getUserDetailSuccess = (data) => ({ type: types.GET_SHARER_DETAIL_SUCCESS,sharer:data });
//   const getUserDetailFailure = (err) => ({ type: types.GET_SHARER_DETAIL_FAILURE,sharer:null,err:err });

  
  export const updateUserRequest = (user_id,data,token) => {
    return dispatch =>{
        dispatch(updateUser());
        const url = `${host}/user/update/${user_id}`;
        return fetch(url, {
            headers: {
              "x-access-token": token,
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(res=>res&&dispatch(updateUserSuccess()))
          .catch(err=>dispatch(updateUserFailure(err)))
    }
  };
  const updateUser = () => ({ type: types.UPDATE_USER_PROFILE });
  const updateUserSuccess = () => ({ type: types.UPDATE_USER_PROFILE_SUCCESS });
  const updateUserFailure = (err) => ({ type: types.UPDATE_USER_PROFILE_FAILURE });
  