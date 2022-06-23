import Authentication from "reducers/Authentication";
import Community from "reducers/Community";
import Notice from "reducers/Notice";
import { TopExp, UpdateExp } from "reducers/Exp";
import { AlarmList } from "reducers/Alarm";
import { DefaultList } from "reducers/Commons/DefaultList";
import { MyDetail } from "reducers/User/MyDetail";
import { User } from "reducers/User/User";
import { UpdateSharer } from "reducers/Sharer/UpdateSharer"
import { ExpDetail } from "reducers/Exp";
import { combineReducers } from "redux";

export default combineReducers({
    Authentication,
    TopExp,
    AlarmList,
    DefaultList,
    UpdateExp,
    Community,
    Notice,
    User,
    MyDetail,
    UpdateSharer,
    ExpDetail,
});
