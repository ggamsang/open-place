import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
  Meesage: { status: "INIT" },
  status: {
    groups: [],
    detail: [],
    opponent: null,
  }
}
export default function Message(state, action) {
  if (typeof state === "undefined") {
    state = initialstate;
  }
  switch (action.type) {
    case types.GET_MESSAGE_GROUP:
      return update(state, { Message: { $set: action.type }, status: { groups: { $set: [] } } });
    case types.GET_MESSAGE_GROUP_SUCCESS:
      return update(state, { Message: { $set: action.type }, status: { groups: { $set: action.groups } } });
    case types.GET_MESSAGE_GROUP_FAILURE:
      return update(state, { Message: { $set: action.type }, status: { groups: { $set: [] } } });
    case types.GET_MESSAGE_DETAIL:
      return update(state, { Message: { $set: action.type }, status: { detail: { $set: [] } } });
    case types.GET_MESSAGE_DETAIL_SUCCESS:
      return update(state, { Message: { $set: action.type }, status: { detail: { $set: action.detail } } });
    case types.GET_MESSAGE_DETAIL_FAILURE:
      return update(state, { Message: { $set: action.type }, status: { detail: { $set: [] } } });
    case types.GET_MESSAGE_OPPONENT:
      return update(state, { Message: { $set: action.type }, status: { opponent: { $set: null } } });
    case types.GET_MESSAGE_OPPONENT_SUCCESS:
      return update(state, { Message: { $set: action.type }, status: { opponent: { $set: action.info } } });
    case types.GET_MESSAGE_OPPONENT_FAILURE:
      return update(state, { Message: { $set: action.type }, status: { opponent: { $set: null } } });

    default:
      return state;
  }
}