import * as types from "src/mobile/actions/ActionTypes";
import update from "react-addons-update";

export function MyDetail(state, action) {
  if (typeof state === "undefined") {
    state = {
      Point: { status: "INIT" },
      addPoint: { status: "INIT" },
      pointHistory: { status: "INIT" },
      registerExp: { status: "INIT" },
      sellExp: { status: "INIT" },
      likeSharer: { status: "INIT" },
      likeExp: { status: "INIT" },
      status: {
        register_list: [],
        register_list_added: [],
        sell_list: [],
        sell_list_added: [],
        like_sharer_list: [],
        like_sharer_list_added: [],
        like_exp_list: [],
        like_exp_list_added: [],
        user_point: 0,
        // point_history: [],
        // register_exp: [],
        // sell_exp: [],
        // like_sharer: [],
        // like_exp: [],
      },
    };
  }
  switch (action.type) {
    case types.GET_USER_POINT:
      return update(state, {
        Point: { status: { $set: "WAITING" } },
        status: { user_point: { $set: action.user_point } },
      });
    case types.GET_USER_POINT_SUCCESS:
      return update(state, {
        Point: { status: { $set: "SUCCESS" } },
        status: { user_point: { $set: action.user_point } },
      });
    case types.GET_USER_POINT_FAILURE:
      return update(state, {
        Point: { status: { $set: "FAILURE" } },
        status: { user_point: { $set: action.user_point } },
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

    /////////// REGISTER
    case types.GET_USER_REGISTER_EXP:
      return update(state, {
        registerExp: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_REGISTER_EXP_ZERO:
      return update(state, {
        registerExp: { status: { $set: "CLEAR" } },
        status: {
          register_list: { $set: action.list },
          register_list_added: { $set: action.list },
        },
      });
    case types.GET_USER_REGISTER_EXP_SUCCESS:
      return update(state, {
        registerExp: { status: { $set: "SUCCESS" } },
        status: {
          register_list: { $set: action.list },
          register_list_added: { $push: action.list },
        },
      });
    case types.GET_USER_REGISTER_EXP_FAILURE:
      return update(state, {
        registerExp: { status: { $set: "FAILURE" } },
        status: {
          register_list: { $set: action.list },
          register_list_added: { $set: action.list_added },
        },
      });

    /////////// SELL
    case types.GET_USER_SELL_EXP:
      return update(state, {
        registerExp: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_SELL_EXP_ZERO:
      return update(state, {
        registerExp: { status: { $set: "CLEAR" } },
        status: {
          sell_list: { $set: action.list },
          sell_list_added: { $set: action.list },
        },
      });
    case types.GET_USER_SELL_EXP_SUCCESS:
      return update(state, {
        registerExp: { status: { $set: "SUCCESS" } },
        status: {
          sell_list: { $set: action.list },
          sell_list_added: { $push: action.list },
        },
      });
    case types.GET_USER_SELL_EXP_FAILURE:
      return update(state, {
        registerExp: { status: { $set: "FAILURE" } },
        status: {
          sell_list: { $set: action.list },
          sell_list_added: { $set: action.list_added },
        },
      });

    case types.GET_USER_LIKE_SHARER:
      return update(state, {
        likeSharer: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_LIKE_SHARER_ZERO:
      return update(state, {
        likeSharer: { status: { $set: "CLEAR" } },
        status: {
          like_sharer_list: { $set: action.list },
          like_sharer_list_added: { $set: action.list },
        },
      });
    case types.GET_USER_LIKE_SHARER_SUCCESS:
      return update(state, {
        likeSharer: { status: { $set: "SUCCESS" } },
        status: {
          like_sharer_list: { $set: action.list },
          like_sharer_list_added: { $push: action.list },
        },
      });
    case types.GET_USER_LIKE_SHARER_FAILURE:
      return update(state, {
        likeSharer: { status: { $set: "FAILURE" } },
        status: {
          like_sharer_list: { $set: action.list },
          like_sharer_list_added: { $set: action.list },
        },
      });

    case types.GET_USER_LIKE_EXP:
      return update(state, {
        likeExp: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_LIKE_EXP_ZERO:
      return update(state, {
        likeExp: { status: { $set: "CLEAR" } },
        status: {
          like_exp_list: { $set: action.list },
          like_exp_list_added: { $set: action.list },
        },
      });
    case types.GET_USER_LIKE_EXP_SUCCESS:
      return update(state, {
        likeExp: { status: { $set: "SUCCESS" } },
        status: {
          like_exp_list: { $set: action.list },
          like_exp_list_added: { $push: action.list },
        },
      });
    case types.GET_USER_LIKE_EXP_FAILURE:
      return update(state, {
        likeExp: { status: { $set: "FAILURE" } },
        status: {
          like_exp_list: { $set: action.list },
          like_exp_list_added: { $set: action.list },
        },
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
export function MyPoint(state, action) {
  if (typeof state === "undefined") {
    state = {
      MyPoint: { status: "INIT" },
      status: {
        pointlog: [],
        total: 0,
        current_point: 0,
      },
    };
  }
  switch (action.type) {
    case types.GET_POINT_TOTAL_COUNT:
      return update(state, {
        MyPoint: { $set: types.SUCCESS },
        status: { total: { $set: action.payload } },
      });
    case types.GET_POINT_COUNT_FAIL:
      return update(state, {
        MyPoint: { $set: types.FAILED },
        status: { total: { $set: 0 } },
      });
    case types.GET_POINT_LIST:
      return update(state, {
        MyPoint: { $set: types.SUCCESS },
        status: { pointlog: { $set: action.payload } },
      });
    case types.GET_POINT_LIST_FAIL:
      return update(state, {
        MyPoint: { $set: types.FAILED },
        status: { pointlog: { $set: [] } },
      });
    case types.GET_CURRENT_POINT:
      console.log("GET_CURRENT_POINT", action);
      return update(state, {
        MyPoint: { $set: types.SUCCESS },
        status: { current_point: { $set: action.payload } },
      });
    case types.GET_CURRENT_POINT_FAILED:
      return update(state, {
        MyPoint: { $set: types.FAILED },
        status: { current_point: { $set: 0 } },
      });
    case types.CHARGE_MY_POINT:
      return update(state, {
        MyPoint: { $set: types.SUCCESS },
      });
    case types.CHARGE_MY_POINT_FAILED:
      return update(state, {
        MyPoint: { $set: types.FAILED },
        status: { error: action.payload },
      });
    default:
      return state;
  }
}
export function User(state, action) {
  if (typeof state === "undefined") {
    state = {
      isLike: { status: "INIT" },
      sharer: { status: "INIT" },
      DeleteSharer: { status: "INIT" },
      UpdateUser: { status: "INIT" },
      status: {
        sharer: null,
        isLike: null,
      },
    };
  }

  switch (action.type) {
    case types.GET_SHARER_DETAIL:
      return update(state, {
        sharer: { status: { $set: "WAITING" } },
      });
    case types.GET_SHARER_DETAIL_SUCCESS:
      console.log(action);
      return update(state, {
        sharer: { status: { $set: "SUCCESS" } },
        status: { sharer: { $set: action.sharer } },
      });
    case types.GET_SHARER_DETAIL_FAILURE:
      return update(state, {
        sharer: { status: { $set: "FAILURE" } },
        status: { sharer: { $set: action.sharer } },
      });
    case types.DELETE_SHARER:
      return update(state, {
        DeleteSharer: { status: { $set: "WAITING" } },
      });
    case types.DELETE_SHARER_SUCCESS:
      console.log(action);
      return update(state, {
        DeleteSharer: { status: { $set: "SUCCESS" } },
      });
    case types.DELETE_SHARER_FAILURE:
      return update(state, {
        DeleteSharer: { status: { $set: "FAILURE" } },
      });
    case types.UPDATE_USER_PROFILE:
      return update(state, {
        UpdateUser: { status: { $set: "WAITING" } },
      });
    case types.UPDATE_USER_PROFILE_SUCCESS:
      return update(state, {
        UpdateUser: { status: { $set: "SUCCESS" } },
      });
    case types.UPDATE_USER_PROFILE_FAILURE:
      return update(state, {
        UpdateUser: { status: { $set: "FAILURE" } },
      });

    case types.GET_USER_LIKE_THIS:
      return update(state, {
        isLike: { status: { $set: "WAITING" } },
      });
    case types.GET_USER_LIKE_THIS_SUCCESS:
      console.log(action);
      return update(state, {
        isLike: { status: { $set: "SUCCESS" } },
        status: { isLike: { $set: action.data.data } },
      });
    case types.GET_USER_LIKE_THIS_FAILURE:
      return update(state, {
        isLike: { status: { $set: "FAILURE" } },
        status: { isLike: { $set: false } },
      });

    default:
      return state;
  }
}
