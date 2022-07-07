import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
    Category: { status: "INIT" },
    Bank_code: { status: "INIT" },
    Exp_type: { status: "INIT" },
    Location: { status: "INIT" },
    status: {
        category: [],
        exp_type: [],
        bank_code: [],
        location: [],
    }
}
export function DefaultList(state, action) {
    if (typeof state === "undefined") {
        state = initialstate;
    }

    switch (action.type) {
        case types.GET_DEFAULT_CATEGORY_SUCCESS:
            return update(state, {
                Category: { status: { $set: "SUCCESS" } },
                status: { category: { $set: action.category }, }
            });
        case types.GET_DEFAULT_CATEGORY_FAILURE:
            return update(state, {
                Category: { status: { $set: "FAILURE" } },
                status: { category: { $set: action.category }, }
            });
        case types.GET_DEFAULT_EXP_TYPE_SUCCESS:
            return update(state, {
                Exp_type: { status: { $set: "SUCCESS" } },
                status: { exp_type: { $set: action.exp_type }, }
            });
        case types.GET_DEFAULT_EXP_TYPE_FAILURE:
            return update(state, {
                Exp_type: { status: { $set: "FAILURE" } },
                status: { exp_type: { $set: action.exp_type }, }
            });
        case types.GET_DEFAULT_BANKCODE_SUCCESS:
            return update(state, {
                Bank_code: { status: { $set: "SUCCESS" } },
                status: { bank_code: { $set: action.bank_code }, }
            });
        case types.GET_DEFAULT_BANKCODE_FAILURE:
            return update(state, {
                Bank_code: { status: { $set: "FAILURE" } },
                status: { bank_code: { $set: action.bank_code }, }
            });
        case types.GET_DEFAULT_LOCATION_SUCCESS:
            return update(state, {
                Location: { status: { $set: "SUCCESS" } },
                status: { location: { $set: action.location }, }
            });
        case types.GET_DEFAULT_LOCATION_FAILURE:
            return update(state, {
                Location: { status: { $set: "FAILURE" } },
                status: { location: { $set: action.location }, }
            });
        default:
            return state;
    }
}