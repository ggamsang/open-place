import * as types from "src/mobile/actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
  Meesage: { status: "INIT" },
  status: {
    groups: [],
    detail: [],
    opponent: null,
    group_id: null,
  }
}
export default function Message(state, action) {
  if (typeof state === "undefined") {
    state = initialstate;
  }
  switch (action.type) {
    case types.GET_MESSAGE_GROUPS:
      return update(state, { Message: { $set: action.type }, status: { groups: { $set: [] } } });
    case types.GET_MESSAGE_GROUPS_SUCCESS:
      return update(state, { Message: { $set: action.type }, status: { groups: { $set: action.groups } } });
    case types.GET_MESSAGE_GROUPS_FAILURE:
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
    case types.GET_COUNSELING_MESSAGE_GOUP:
      return update(state, { Message: { $set: action.type }, status: { group_id: { $set: null } } });
    case types.GET_COUNSELING_MESSAGE_GOUP_SUCCESS:
      return update(state, { Message: { $set: action.type }, status: { group_id: { $set: action.group_id } } });
    case types.GET_COUNSELING_MESSAGE_GOUP_FAILURE:
      return update(state, { Message: { $set: action.type }, status: { group_id: { $set: null } } });
    //
    default:
      return state;
  }
}