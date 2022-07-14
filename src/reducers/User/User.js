import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
  sharer: { status: "INIT" },
  DeleteSharer: { status: "INIT" },
  UpdateUser: { status: "INIT" },
  status: {
    sharer: null,
  }
}
export function User(state, action) {
  if (typeof state === "undefined") {
    state = initialstate;
  }

  switch (action.type) {
    case types.GET_SHARER_DETAIL:
      return update(state, {
        sharer: { status: { $set: "WAITING" } },
      });
    case types.GET_SHARER_DETAIL_SUCCESS:
      console.log(action)
      return update(state, {
        sharer: { status: { $set: "SUCCESS" } },
        status: { sharer: { $set: action.sharer }, }
      });
    case types.GET_SHARER_DETAIL_FAILURE:
      return update(state, {
        sharer: { status: { $set: "FAILURE" } },
        status: { sharer: { $set: action.sharer }, }
      });
    case types.DELETE_SHARER:
      return update(state, {
        DeleteSharer: { status: { $set: "WAITING" } },
      });
    case types.DELETE_SHARER_SUCCESS:
      console.log(action)
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
    default:
      return state;
  }
}