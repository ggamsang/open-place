import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
  ExpList: { status: "INIT" },
  ExpTagList: { status: "INIT" },
  status: {
    exp_list: [],
    exp_list_added: [],
    exp_tag_list: [],
  },
};
export function ExpList(state, action) {
  if (typeof state === "undefined") {
    state = initialstate;
  }

  switch (action.type) {
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
    case types.SET_EMPTY_EXP_LIST:
      return update(state, {
        ExpList: { status: { $set: "CLEAR" } },
        status: {
          exp_list: { $set: [] },
          exp_list_added: { $set: [] },
        },
      });
    /**
     *
     */
    case types.GET_EXP_TAG_LIST:
      return update(state, {
        ExpTagList: { status: { $set: "WAITING" } },
      });
    case types.GET_EXP_TAG_LIST_SUCCESS:
      return update(state, {
        ExpTagList: { status: { $set: "SUCCESS" } },
        status: {
          exp_tag_list: { $set: action.list },
        },
      });
    case types.GET_EXP_TAG_LIST_FAILURE:
      return update(state, {
        ExpList: { status: { $set: "FAILURE" } },
        status: {
          exp_tag_list: { $set: action.list },
        },
      });

    default:
      return state;
  }
}
