import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
    MyPoint: { status: "INIT" },
    status: {
        pointlog: [],
        total: 0,
    }
}
export function MyPoint(state, action) {
    if (typeof state === "undefined") {
        state = initialstate;
    }
    switch (action.type) {
        case types.GET_POINT_TOTAL_COUNT:
            return update(state, {
                MyPoint: { $set: types.SUCCESS },
                status: { total: { $set: action.payload } }
            });
        case types.GET_POINT_COUNT_FAIL:
            return update(state, {
                MyPoint: { $set: types.FAILED },
                status: { total: { $set: 0 } }
            });
        case types.GET_POINT_LIST:
            return update(state, {
                MyPoint: { $set: types.SUCCESS },
                status: { pointlog: { $set: action.payload } }
            });
        case types.GET_POINT_LIST_FAIL:
            return update(state, {
                MyPoint: { $set: types.FAILED },
                status: { pointlog: { $set: [] } }
            });
        default:
            return state;
    }
}