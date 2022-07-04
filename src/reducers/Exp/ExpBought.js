import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
    Bought: { status: "INIT" },
    status: {
        bought: [],
        bought_added: [],
        Error: null,
    }
}
export function ExpBought(state, action) {
    if (typeof state === "undefined") {
        state = initialstate;
    }

    switch (action.type) {
        case types.GET_USER_BOUGHT_EXP:
            return update(state, { Bought: { $set: action.type } });
        case types.GET_USER_BOUGHT_EXP_SUCCESS:
            console.log("-", action);
            return update(state, {
                Bought: { $set: action.type },
                status: {
                    bought: { $set: action.list }
                }
            });
        case types.GET_USER_BOUGHT_EXP_FAILURE:
            return update(state, {
                Bought: { $set: action.type },
                status: {
                    bought: { $set: [] },
                    Error: { $set: action.error }
                }
            });
        // case type.GET_EXP_LIST_ZERO:
        //     return update(state, {
        //         ExpList: { status: { $set: "CLEAR" } },
        //         status: {
        //             exp_list: { $set: action.list },
        //             exp_list_added: { $set: action.list }
        //         }
        //     })
        // case types.GET_EXP_LIST_SUCCESS:
        //     return update(state, {
        //         ExpList: { status: { $set: "SUCCESS" } },
        //         status: {
        //             exp_list: { $set: action.list },
        //             exp_list_added: { $push: action.list }
        //         }
        // })
        default:
            return state;
    }
}