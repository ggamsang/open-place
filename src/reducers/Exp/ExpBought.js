import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
    Bought: { status: "INIT" },
    status: {
        bought: [],
        bought_added: [],
        detail: null,
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
        case types.GET_USER_BOUGHT_EXP_ZERO:
            return update(state, { Bought: { $set: action.type }, status: { bought: { $set: action.list }, bought_added: { $set: action.list } } });
        case types.GET_USER_BOUGHT_EXP_SUCCESS:
            return update(state, { Bought: { $set: action.type }, status: { bought: { $set: action.list }, bought_added: { $push: action.list } } });
        case types.GET_USER_BOUGHT_EXP_FAILURE:
            return update(state, { Bought: { $set: action.type }, status: { bought: { $set: [] }, Error: { $set: action.error } } });
        case types.GET_USER_BOUGHT_EXP_DETAIL:
            return update(state, { Bought: { $set: action.type } });
        case types.GET_USER_BOUGHT_EXP_DETAIL_SUCCESS:
            return update(state, { Bought: { $set: action.type }, status: { detail: { $set: action.detail } } });
        case types.GET_USER_BOUGHT_EXP_DETAIL_FAILURE:
            return update(state, { Bought: { $set: action.type }, status: { detail: { $set: null }, Error: { $set: action.error } } });
        default:
            return state;
    }
}