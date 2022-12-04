import * as types from "src/mobile/actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
  Contact: { status: "INIT" },
  status: {
    contacts: [],
    detail: null,
  }
}
export function Contact(state, action) {
  if (typeof state === "undefined") {
    state = initialstate;
  }

  switch (action.type) {

    case types.CREATE_CONTACT_SUCCESS:
      return update(state, {
        Contact: { status: { $set: action.type } },
      });
    case types.CREATE_CONTACT_FAILURE:
      return update(state, {
        Contact: { status: { $set: action.type } },
      });
    case types.GET_CONTACT_LIST_SUCCESS:
      return update(state, {
        Contact: { status: { $set: action.type } },
        status: { contacts: { $set: action.contacts } }
      });
    case types.GET_CONTACT_LIST_FAILURE:
      return update(state, {
        Contact: { status: { $set: action.type } },
        status: { contacts: { $set: [] } }
      });
    case types.GET_CONTACT_SUCCESS:
      return update(state, {
        Contact: { status: { $set: action.type } },
        status: { detail: { $set: action.detail } }
      });
    case types.GET_CONTACT_FAILURE:
      return update(state, {
        Contact: { status: { $set: action.type } },
        status: { detail: { $set: null } }
      });
    case types.UPDATE_CONTACT_FAILURE:
      return update(state, {
        Contact: { status: { $set: action.type } },
      });
    case types.UPDATE_CONTACT_SUCCESS:
      return update(state, {
        Contact: { status: { $set: action.type } },
      });
    case types.DELETE_CONTACT_SUCCESS:
      return update(state, {
        Contact: { status: { $set: action.type } },
      });
    case types.DELETE_CONTACT_FAILURE:
      return update(state, {
        Contact: { status: { $set: action.type } },
      });

    default:
      return state;
  }
}