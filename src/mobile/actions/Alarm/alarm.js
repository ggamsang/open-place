import * as types from "src/mobile/actions/ActionTypes";
import host from "src/config";
import { GET } from "src/constants";

// 내 알림 리스트
export const GetMyAlarmListRequest = (user_id) => {
    console.log("test alarm");
    return (dispatch) => {
      const url = `${host}/alarm/list/${user_id}`;
      return fetch(url, GET)
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
  