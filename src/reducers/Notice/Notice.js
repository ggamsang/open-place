import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
  Notice: { status: "INIT" },
  status: {
    notices: [],
    total: 0,
    detail: null,
  }
}
export default function Notice(state, action) {
  if (typeof state === "undefined") {
    state = initialtate;
  }
  switch (action.type) {
    case types.GET_NOTICE_TOTAL_COUNT:
      return update(state, { Notice: { $set: action.type }, status: { total: { $set: action.payload } } });
    case types.GET_NOTICE_COUNT_FAIL:
      return update(state, { Notice: { $set: action.type }, status: { total: { $set: 0 } } });
    case types.GET_NOTICE_LIST:
      return update(state, { Notice: { $set: action.type }, status: { notices: { $set: action.payload } } });
    case types.GET_NOTICE_LIST_FAIL:
      return update(state, { Notice: { $set: action.type }, status: { notices: { $set: [] } } });
    case types.NOTICE_DETAIL_SUCCESS:
      return update(state, { Notice: { $set: action.type }, status: { detail: { $set: action.payload } } });
    case types.NOTICE_DETAIL_FAILED:
      return update(state, { Notice: { $set: action.type }, status: { detail: { $set: null } } });
    default:
      return state;
  }
}