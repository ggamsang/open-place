import * as types from "actions/ActionTypes";
import host from "config";

// 메인 페이지 인기 아이템 리스트
// place.opensrcdesign.com/api/
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
          .catch(err=>dispatch(createExpFailure()))
    }
  };
  const createExp = () => ({ type: types.PUT_CREATE_EXP });
  const createExpSuccess = () => ({ type: types.PUT_CREATE_EXP_SUCCESS });
  const createExpFailure = () => ({ type: types.PUT_CREATE_EXP_FAILURE });


  export const updateExpRequest = (data,token) => {
    return dispatch =>{
        dispatch(updateExp());
        const url = `${host}/exp/update`;
        return fetch(url, {
            headers: {
              "x-access-token": token,
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
          })
          .then(res=>res.json)
          .then(res=>res&&dispatch(updateExpSuccess()))
          .catch(err=>dispatch(updateExpFailure()))
    }
  };
  const updateExp = () => ({ type: types.POST_MODIFY_EXP });
  const updateExpSuccess = () => ({ type: types.POST_MODIFY_EXP_SUCCESS });
  const updateExpFailure = () => ({ type: types.POST_MODIFY_EXP_FAILURE });
  