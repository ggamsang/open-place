import * as types from "actions/ActionTypes";
import host from "config";

export const createExpRequest = (data,token) => {
    return dispatch =>{
        dispatch(createExp());
        const url = `${host}/exp/create`;
        return fetch(url, {
            headers: {
              "x-access-token": token,
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
          })
          .then(res=>res.json)
          .then(res=>res&&dispatch(createExpSuccess()))
          .catch(err=>{
            console.log(err);
            return dispatch(createExpFailure())
          })
    }
  };
  const createExp = () => ({ type: types.PUT_CREATE_EXP });
  const createExpSuccess = (data) => ({ type: types.PUT_CREATE_EXP_SUCCESS,data:data });
  const createExpFailure = () => ({ type: types.PUT_CREATE_EXP_FAILURE });


  export const updateExpRequest = (id,data,token) => {
    return dispatch =>{
        dispatch(updateExp());
        const url = `${host}/exp/${id}`;
        return fetch(url, {
            headers: {
              "x-access-token": token,
              "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(data)
          })
          .then(res=>res.json)
          .then(res=>res&&dispatch(updateExpSuccess()))
          .catch(err=>dispatch(updateExpFailure()))
    }
  };
  const updateExp = () => ({ type: types.UPDATE_MODIFY_EXP });
  const updateExpSuccess = () => ({ type: types.UPDATE_MODIFY_EXP_SUCCESS });
  const updateExpFailure = () => ({ type: types.UPDATE_MODIFY_EXP_FAILURE });
  