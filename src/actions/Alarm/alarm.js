import * as types from "actions/ActionTypes";
import host from "config";

// 내 알림 리스트
export const GetMyAlarmListRequest = (user_id) => {
    console.log("test alarm");
    return (dispatch) => {
      const url = `${host}/alarm/list/${user_id}`;
      return fetch(url, {
        headers: { "Content-Type": "application/json" }, method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          dispatch(GetMyAlarmListSuccess(data ? data : []))
        }
          )
        .catch(error => dispatch(GetMyAlarmListFailure()));
    }
  };
  const GetMyAlarmListSuccess = (data) => ({ type: types.GET_ALARM_LIST_SUCCESS, alarmList: data });
  const GetMyAlarmListFailure = () => ({ type: types.GET_ALARM_LIST_FAILURE, alarmList: [] });
  