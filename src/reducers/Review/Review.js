import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
  Review: { status: "INIT" },
  status: {
    reviews: [],
  }
}
export function Review(state, action) {
  if (typeof state === "undefined") {
    state = initialtate;
  }

  switch (action.type) {

    case types.CREATE_REVIEW_SUCCESS:
      return update(state, {
        Review: { status: { $set: action.type } },
      });
    case types.CREATE_REVIEW_FAILURE:
      return update(state, {
        Review: { status: { $set: action.type } },
      });
    case types.GET_REVIEW_SUCCESS:
      return update(state, {
        Review: { status: { $set: action.type } },
        status: { reviews: { $set: action.reviews } }
      });
    case types.GET_REVIEW_FAILURE:
      return update(state, {
        Review: { status: { $set: action.type } },
        status: { reviews: { $set: [] } }
      });
    case types.UPDATE_REVIEW_FAILURE:
      return update(state, {
        Review: { status: { $set: action.type } },
      });
    case types.UPDATE_REVIEW_SUCCESS:
      return update(state, {
        Review: { status: { $set: action.type } },
      });
    case types.DELETE_REVIEW_SUCCESS:
      return update(state, {
        Review: { status: { $set: action.type } },
      });
    case types.DELETE_REVIEW_FAILURE:
      return update(state, {
        Review: { status: { $set: action.type } },
      });

    default:
      return state;
  }
}