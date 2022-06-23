import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
    ExpDetail: { status: "INIT" },
    status: {
        expDetail: [],
    }
}
export function ExpDetail(state, action) {
    if (typeof state === "undefined") {
        state = initialtate;
    }

    switch (action.type) {
        case types.GET_EXP_DETAIL:
            return update(state, {
                ExpDetail: {
                    status: { $set: "WAITING" }
                },
                status: {
                    expDetail: { $set: null },
                }
            });
        case types.GET_EXP_DETAIL_SUCCESS:
            return update(state, {
                ExpDetail: {
                    status: { $set: "SUCCESS" }
                },
                status: {
                    expDetail: { $set: action.data }
                }
            });
        case types.GET_EXP_DETAIL_FAILURE:
            return update(state, {
                ExpDetail: {
                    status: { $set: "FAILURE" }
                },
                status: {
                    expDetail: { $set: action.data }
                }
            });
        default:
            return state;
    }
}