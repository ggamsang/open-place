import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
    CreateExp: { status: "INIT" },
    UpdateExp: { status: "INIT" },
}
export function UpdateExp(state, action) {
    if (typeof state === "undefined") {
        state = initialstate;
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
        case types.UPDATE_MODIFY_EXP:
            return update(state, {
                UpdateExp: {
                    status: { $set: "WAITING" }
                }
            });
        case types.UPDATE_MODIFY_EXP_SUCCESS:
            return update(state, {
                UpdateExp: {
                    status: { $set: "SUCCESS" }
                }
            });
        case types.UPDATE_MODIFY_EXP_FAILURE:
            return update(state, {
                UpdateExp: {
                    status: { $set: "FAILURE" }
                }
            });
        default:
            return state;
    }
}