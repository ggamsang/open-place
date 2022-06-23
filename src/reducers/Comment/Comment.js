import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
  Comment: { status: "INIT" },
  status: {
    comment: [],
  }
}

export default function Comment(state, action) {
  if (typeof state === "undefined") {
    state = initialtate;
  }

  switch (action.type) {
    case types.GET_ARTICLE_COMMENT_SUCCESS:
      return update(state,
        {
          Comment: { $set: action.type },
          status: { comment: { $set: action.Comment } }
        });
    case types.GET_ARTICLE_COMMENT_FAILURE:
      return update(state,
        {
          Comment: { $set: action.type },
          status: { comment: { $set: [] } }
        });
    default:
      return state;
  }
}