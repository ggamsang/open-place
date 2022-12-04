import * as types from "src/mobile/actions/ActionTypes";
import update from "react-addons-update";

export function TopExp(state, action) {
  if (typeof state === "undefined") {
    state = {
      TopExp: { status: "INIT" },
      status: {
        top_exp: [],
      },
    };
  }

  switch (action.type) {
    case types.GET_TOP_ITEM_LIST_SUCCESS:
      console.log(action);
      return update(state, {
        TopExp: {
          status: { $set: "SUCCESS" },
        },
        status: {
          top_exp: { $set: action.TopList },
        },
      });
    case types.GET_TOP_ITEM_LIST_FAILURE:
      return update(state, {
        TopExp: {
          status: { $set: "FAILURE" },
        },
        status: {
          top_exp: { $set: action.TopList },
        },
      });
    case types.GET_TOP_ITEM_LIST_CLEAR:
      return update(state, {
        TopExp: {
          status: { $set: "SUCCESS" },
        },
        status: {
          top_exp: { $set: action.TopList },
        },
      });
    default:
      return state;
  }
}

export function UpdateExp(state, action) {
  if (typeof state === "undefined") {
    state = {
      CreateExp: { status: "INIT" },
      UpdateExp: { status: "INIT" },
    };
  }

  switch (action.type) {
    case types.PUT_CREATE_EXP:
      return update(state, {
        CreateExp: {
          status: { $set: "WAITING" },
        },
      });
    case types.PUT_CREATE_EXP_SUCCESS:
      return update(state, {
        CreateExp: {
          status: { $set: "SUCCESS" },
        },
      });
    case types.PUT_CREATE_EXP_FAILURE:
      return update(state, {
        CreateExp: {
          status: { $set: "FAILURE" },
        },
      });
    case types.UPDATE_MODIFY_EXP:
      return update(state, {
        UpdateExp: {
          status: { $set: "WAITING" },
        },
      });
    case types.UPDATE_MODIFY_EXP_SUCCESS:
      return update(state, {
        UpdateExp: {
          status: { $set: "SUCCESS" },
        },
      });
    case types.UPDATE_MODIFY_EXP_FAILURE:
      return update(state, {
        UpdateExp: {
          status: { $set: "FAILURE" },
        },
      });
    default:
      return state;
  }
}

export function ExpList(state, action) {
  if (typeof state === "undefined") {
    state = {
      ExpList: { status: "INIT" },
      status: {
        exp_list: [],
        exp_list_added: [],
      },
    };
  }

  switch (action.type) {
    // case types.GET_EXP_LIST:
    //     return update(state, {
    //         ExpList: { status: {$set:"WAITING"} },
    //     })
    // case type.GET_EXP_LIST_ZERO:
    //     console.log("--",action)
    //     return update(state, {
    //         ExpList: { status:{$set:"CLEAR"} },
    //         status: {
    //             exp_list: { $set: action.list },
    //             exp_list_added: { $set: action.list_added }
    //         }
    //     })
    // case types.GET_EXP_LIST_SUCCESS:
    //     return update(state, {
    //         ExpList: { status:{$set:"SUCCESS"} },
    //         status: {
    //             exp_list: { $set: action.list },
    //             exp_list_added: { $push: action.list }
    //         }
    //     })
    // case types.GET_EXP_LIST_FAILURE:
    //     return update(state, {
    //         ExpList: { status: {$set:"FAILURE"} },
    //         status: {
    //             exp_list: { $set: action.list },
    //             exp_list_added: { $set: action.list_added }
    //         }
    //     })
    case types.GET_EXP_LIST:
      return update(state, {
        ExpList: { status: { $set: "WAITING" } },
      });
    case types.GET_EXP_LIST_ZERO:
      return update(state, {
        ExpList: { status: { $set: "CLEAR" } },
        status: {
          exp_list: { $set: action.list },
          exp_list_added: { $set: action.list },
        },
      });
    case types.GET_EXP_LIST_SUCCESS:
      return update(state, {
        ExpList: { status: { $set: "SUCCESS" } },
        status: {
          exp_list: { $set: action.list },
          exp_list_added: { $push: action.list },
        },
      });
    case types.GET_EXP_LIST_FAILURE:
      return update(state, {
        ExpList: { status: { $set: "FAILURE" } },
        status: {
          exp_list: { $set: action.list },
          exp_list_added: { $set: action.list },
        },
      });
    default:
      return state;
  }
}

export function ExpDetail(state, action) {
  if (typeof state === "undefined") {
    state = {
      ExpDetail: { status: "INIT" },
      status: {
        expDetail: [],
      },
    };
  }

  switch (action.type) {
    case types.GET_EXP_DETAIL:
      return update(state, {
        ExpDetail: {
          status: { $set: "WAITING" },
        },
        status: {
          expDetail: { $set: null },
        },
      });
    case types.GET_EXP_DETAIL_SUCCESS:
      return update(state, {
        ExpDetail: {
          status: { $set: "SUCCESS" },
        },
        status: {
          expDetail: { $set: action.data },
        },
      });
    case types.GET_USER_BOUGHT_EXP_DETAIL_SUCCESS:
      return update(state, {
        ExpDetail: {
          status: { $set: "SUCCESS" },
        },
        status: {
          expDetail: { $set: action.detail },
        },
      });
    case types.GET_EXP_DETAIL_FAILURE:
      return update(state, {
        ExpDetail: {
          status: { $set: "FAILURE" },
        },
        status: {
          expDetail: { $set: action.data },
        },
      });
    default:
      return state;
  }
}

export function ExpBought(state, action) {
  if (typeof state === "undefined") {
    state = {
      Bought: { status: "INIT" },
      status: {
        bought: [],
        bought_added: [],
        detail: null,
        Error: null,
      },
    };
  }
  switch (action.type) {
    case types.GET_USER_BOUGHT_EXP:
      return update(state, { Bought: { $set: action.type } });
    case types.GET_USER_BOUGHT_EXP_ZERO:
      return update(state, {
        Bought: { $set: action.type },
        status: {
          bought: { $set: action.list },
          bought_added: { $set: action.list },
        },
      });
    case types.GET_USER_BOUGHT_EXP_SUCCESS:
      return update(state, {
        Bought: { $set: action.type },
        status: {
          bought: { $set: action.list },
          bought_added: { $push: action.list },
        },
      });
    case types.GET_USER_BOUGHT_EXP_FAILURE:
      return update(state, {
        Bought: { $set: action.type },
        status: {
          bought: { $set: [] },
          bought_added: { $set: [] },
          Error: { $set: action.error },
        },
      });
    case types.GET_USER_BOUGHT_EXP_DETAIL:
      return update(state, { Bought: { $set: action.type } });
    case types.GET_USER_BOUGHT_EXP_DETAIL_SUCCESS:
      return update(state, {
        Bought: { $set: action.type },
        status: { detail: { $set: action.detail } },
      });
    case types.GET_USER_BOUGHT_EXP_DETAIL_FAILURE:
      return update(state, {
        Bought: { $set: action.type },
        status: {
          detail: { $set: null },
          Error: { $set: action.error },
        },
      });
    default:
      return state;
  }
}
