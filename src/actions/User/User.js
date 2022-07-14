import * as types from "actions/ActionTypes";
import host from "config";
import { GET } from "constant";
  
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
  