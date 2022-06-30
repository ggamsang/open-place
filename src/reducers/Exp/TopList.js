import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
  TopExp: { status: "INIT" },
  status: {
    top_exp: [],
  }
}
export function TopExp(state, action) {
  if (typeof state === "undefined") {
    state = initialtate;
  }

  switch (action.type) {
    case types.GET_TOP_ITEM_LIST_SUCCESS:
      console.log(action);
      return update(state, {
        TopExp: {
          status: { $set: "SUCCESS" }
        },
        status: {
          top_exp: { $set: action.TopList },
        }
      });
    case types.GET_TOP_ITEM_LIST_FAILURE:
      return update(state, {
        TopExp: {
          status: { $set: "FAILURE" }
        },
        status: {
          top_exp: { $set: action.TopList }
        }
      });
    case types.GET_TOP_ITEM_LIST_CLEAR:
      return update(state, {
        TopExp: {
          status: { $set: "SUCCESS" }
        },
        status: {
          top_exp: { $set: action.TopList }
        }
      });
    default:
      return state;
  }
}