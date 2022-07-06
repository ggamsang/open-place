import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
  sharer: { status: "INIT" },
  UpdateUser: { status: "INIT" },
  status: {
    sharer: [],
  }
}
export function User(state, action) {
  if (typeof state === "undefined") {
    state = initialstate;
  }

  switch (action.type) {
    case types.GET_SHARER_DETAIL:
      return update(state, {
        User: { status: { $set: "WAITING" } },
        status: { sharer: { $set: action.sharer }, }
      });
    case types.GET_SHARER_DETAIL_SUCCESS:
      return update(state, {
        User: { status: { $set: "SUCCESS" } },
        status: { sharer: { $set: action.sharer }, }
      });
    case types.GET_SHARER_DETAIL_FAILURE:
      return update(state, {
        User: { status: { $set: "FAILURE" } },
        status: { sharer: { $set: action.sharer }, }
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
    default:
      return state;
  }
}