import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
  Point: { status: "INIT" },
  addPoint: { status: "INIT" },
  pointHistory: { status: "INIT" },
  registerExp: { status: "INIT" },
  sellExp: { status: "INIT" },
  likeSharer: { status: "INIT" },
  likeExp: { status: "INIT" },
  status: {
    user_point: 0,
    point_history: [],
    register_exp: [],
    sell_exp: [],
    like_sharer: [],
    like_exp: [],
  }
}
export function MyDetail(state, action) {
  if (typeof state === "undefined") {
    state = initialstate;
  }
  switch (action.type) {
    case types.GET_USER_POINT:
      return update(state, {
        Point: { status: { $set: "WAITING" } },
        status: { user_point: { $set: action.user_point }, }
      });
    case types.GET_USER_POINT_SUCCESS:
      return update(state, {
        Point: { status: { $set: "SUCCESS" } },
        status: { user_point: { $set: action.user_point }, }
      });
    case types.GET_USER_POINT_FAILURE:
      return update(state, {
        Point: { status: { $set: "FAILURE" } },
        status: { user_point: { $set: action.user_point }, }
      });


    case types.SET_USER_POINT:
      return update(state, {
        addPoint: { status: { $set: "WAITING" } },
      });
    case types.SET_USER_POINT_SUCCESS:
      return update(state, {
        addPoint: { status: { $set: "SUCCESS" } },
      });
    case types.SET_USER_POINT_FAILURE:
      return update(state, {
        addPoint: { status: { $set: "FAILURE" } },
      });

    case types.GET_USER_POINT_HISTORY:
      return update(state, {
        pointHistory: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_POINT_HISTORY_SUCCESS:
      return update(state, {
        pointHistory: { status: { $set: "SUCCESS" } },
        status: { point_history: { $set: action.history } },
      });
    case types.GET_USER_POINT_HISTORY_FAILURE:
      return update(state, {
        pointHistory: { status: { $set: "FAILURE" } },
        status: { point_history: { $set: [] } },
      });

    case types.GET_USER_REGISTER_EXP:
      return update(state, {
        registerExp: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_REGISTER_EXP_SUCCESS:
      return update(state, {
        registerExp: { status: { $set: "SUCCESS" } },
        status: { register_exp: { $set: action.list } }
      });
    case types.GET_USER_REGISTER_EXP_FAILURE:
      return update(state, {
        registerExp: { status: { $set: "FAILURE" } },
        status: { register_exp: { $set: [] } }
      });
    case types.GET_USER_SELL_EXP:
      return update(state, {
        sellExp: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_SELL_EXP_SUCCESS:
      return update(state, {
        sellExp: { status: { $set: "SUCCESS" } },
        status: { sell_exp: { $set: action.list } }
      });
    case types.GET_USER_SELL_EXP_FAILURE:
      return update(state, {
        sellExp: { status: { $set: "FAILURE" } },
        status: { sell_exp: { $set: [] } }
      });
    case types.GET_USER_LIKE_SHARER:
      return update(state, {
        likeSharer: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_LIKE_SHARER_SUCCESS:
      return update(state, {
        likeSharer: { status: { $set: "SUCCESS" } },
        status: { like_sharer: { $set: action.list } }
      });
    case types.GET_USER_LIKE_SHARER_FAILURE:
      return update(state, {
        likeSharer: { status: { $set: "FAILURE" } },
        status: { like_sharer: { $set: [] } }
      });
    case types.GET_USER_LIKE_EXP:
      return update(state, {
        likeExp: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_LIKE_EXP_SUCCESS:
      return update(state, {
        likeExp: { status: { $set: "SUCCESS" } },
        status: { like_exp: { $set: action.list } }
      });
    case types.GET_USER_LIKE_EXP_FAILURE:
      return update(state, {
        likeExp: { status: { $set: "FAILURE" } },
        status: { like_exp: { $set: [] } }
      });
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