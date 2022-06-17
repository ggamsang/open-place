import Authentication from "reducers/Authentication";
import { TopList,UpdateExp } from "reducers/Exp";
import { AlarmList } from "reducers/Alarm";
import { DefaultList } from "reducers/Commons/DefaultList";

import { combineReducers } from "redux";

export default combineReducers({
    Authentication,
    TopList,
    AlarmList,
    DefaultList,
    UpdateExp,
});
