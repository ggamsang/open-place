import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
    CreateExp: { status: "INIT" },
}
export function UpdateExp(state, action) {
    if (typeof state === "undefined") {
        state = initialtate;
    }

    switch (action.type) {
        case types.PUT_CREATE_EXP:
            return update(state, {
                CreateExp: {
                    status: { $set: "WAITING" }
                }
            });
        case types.PUT_CREATE_EXP_SUCCESS:
            return update(state, {
                CreateExp: {
                    status: { $set: "SUCCESS" }
                }
            });
        case types.PUT_CREATE_EXP_FAILURE:
            return update(state, {
                CreateExp: {
                    status: { $set: "FAILURE" }
                }
            });
        default:
            return state;
    }
}