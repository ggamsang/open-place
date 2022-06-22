import Authentication from "reducers/Authentication";
import Community from "reducers/Community";
import Comment from "reducers/Comment";
import Notice from "reducers/Notice";
import { TopList, UpdateExp } from "reducers/Exp";
import { AlarmList } from "reducers/Alarm";
import { DefaultList } from "reducers/Commons/DefaultList";
import { MyDetail } from "reducers/User/MyDetail";
import { User } from "reducers/User/User";
import { combineReducers } from "redux";

export default combineReducers({
    Authentication,
    TopList,
    AlarmList,
    DefaultList,
    UpdateExp,
    Comment,
    Community,
    Notice,
    User,
    MyDetail,
});
