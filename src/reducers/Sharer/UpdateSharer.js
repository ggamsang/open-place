import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
  SharerUpdate: { status: "INIT" },
  status: {
  }
}
export function UpdateSharer(state, action) {
  if (typeof state === "undefined") {
    state = initialtate;
  }
  switch (action.type) {
    case types.UPDATE_SHARER_PROFILE:
      return update(state, {
        SharerUpdate: {
          status: { $set: "WAITING" }
        }
      });
    case types.UPDATE_SHARER_PROFILE_SUCCESS:
      return update(state, {
        SharerUpdate: {
          status: { $set: "SUCCESS" }
        }
      });
    case types.UPDATE_SHARER_PROFILE_FAILURE:
      return update(state, {
        SharerUpdate: {
          status: { $set: "FAILURE" }
        }
      });
    default:
      return state;
  }
}