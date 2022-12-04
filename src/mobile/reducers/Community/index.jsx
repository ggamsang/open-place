import * as types from "src/mobile/actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
  Community: { status: "INIT" },
  status: {
    articles: [],
    total: 0,
    detail: null,
  }
}
export default function Community(state, action) {
  if (typeof state === "undefined") {
    state = initialstate;
  }
  switch (action.type) {
    case types.GET_ARTICLE_TOTAL_COUNT:
      return update(state, { Community: { $set: action.type }, status: { total: { $set: action.payload } } });
    case types.GET_ARTICLE_COUNT_FAIL:
      return update(state, { Community: { $set: action.type }, status: { total: { $set: 0 } } });
    case types.GET_ARTICLE_LIST:
      return update(state, { Community: { $set: action.type }, status: { articles: { $set: action.payload } } });
    case types.GET_ARTICLE_LIST_FAIL:
      return update(state, { Community: { $set: action.type }, status: { articles: { $set: [] } } });
    case types.ARTICLE_DETAIL_SUCCESS:
      return update(state, { Community: { $set: action.type }, status: { detail: { $set: action.payload } } });
    case types.ARTICLE_DETAIL_FAILED:
      return update(state, { Community: { $set: action.type }, status: { detail: { $set: null } } });
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