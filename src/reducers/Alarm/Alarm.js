import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
  AlarmList:{status:"INIT"},
  status:{
    alarmList:[],
  }
}
export function AlarmList(state,action){
    if(typeof state === "undefined"){
      state = initialtate;
    }

    switch(action.type){
      case types.GET_ALARM_LIST_SUCCESS:
        return update(state,{
          AlarmList:{
            status:{$set:"SUCCESS"}
          },
          status:{
            alarmList:{$set:action.alarmList},
          }
        });
      case types.GET_ALARM_LIST_FAILURE:
        return update(state,{
          AlarmList:{
            status:{$set:"FAILURE"}
          },
          status:{
            alarmList:{$set:action.alarmList}
          }
        });
      default:
        return state;
    }
}