import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
  Community: { status: "INIT" },
  status: {
    notices: [],
    total: 0,
  }
}
export default function Community(state, action) {
  if (typeof state === "undefined") {
    state = initialtate;
  }
  switch (action.type) {
    case types.GET_NOTICE_TOTAL_COUNT:
      return update(state, { Community: { $set: action.type }, status: { total: { $set: action.payload } } });
    case types.GET_NOTICE_COUNT_FAIL:
      return update(state, { Community: { $set: action.type }, status: { total: { $set: 0 } } });
    case types.GET_NOTICE_LIST:
      return update(state, { Community: { $set: action.type }, status: { notices: { $set: action.payload } } });
    case types.GET_NOTICE_LIST_FAIL:
      return update(state, { Community: { $set: action.type }, status: { notices: { $set: [] } } });
    default:
      return state;
  }
  // switch(action.type){
  //   case types.GET_TOP_ITEM_LIST_SUCCESS:
  //     return update(state,{
  //       TopList:{
  //         status:{$set:"SUCCESS"}
  //       },
  //       status:{
  //         itemList:{$set:action.TopList},
  //       }
  //     });
  //   case types.GET_TOP_ITEM_LIST_FAILURE:
  //     return update(state,{
  //       TopList:{
  //         status:{$set:"FAILURE"}
  //       },
  //       status:{
  //         ItemList:{$set:action.TopList}
  //       }
  //     });
  //   case types.GET_TOP_ITEM_LIST_CLEAR:
  //     return update(state,{
  //       TopList:{
  //         status:{$set:"SUCCESS"}
  //       },
  //       status:{
  //         ItemList:{$set:action.TopList}
  //       }
  //     });
  //   default:
  //     return state;
  // }
}