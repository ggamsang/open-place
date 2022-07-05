import * as types from "actions/ActionTypes";
import host from "config";

export const updateSharerProfileRequest = (user_id,data,token) => {
  return dispatch =>{
      dispatch(updateSharerProfile());
      const url = `${host}/sharer/update/${user_id}`;
      return fetch(url, {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(res=>res&&dispatch(updateSharerProfileSuccess()))
        .catch(err=>{
          console.log(err);
          dispatch(updateSharerProfileFailure())
        })
  }
};
  const updateSharerProfile = () => ({ type: types.UPDATE_SHARER_PROFILE });
  const updateSharerProfileSuccess = () => ({ type: types.UPDATE_SHARER_PROFILE_SUCCESS });
  const updateSharerProfileFailure = (err) => ({ type: types.UPDATE_SHARER_PROFILE_FAILURE,err:err });

  