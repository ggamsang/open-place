import Authentication from "reducers/Authentication";
import Community from "reducers/Community";
import Comment from "reducers/Comment";
import Notice from "reducers/Notice";
import Message from "reducers/Message";
import { TopExp, UpdateExp } from "reducers/Exp";
import { AlarmList } from "reducers/Alarm";
import { DefaultList } from "reducers/Commons/DefaultList";
import { MyDetail } from "reducers/User/MyDetail";
import { User } from "reducers/User/User";
import { UpdateSharer } from "reducers/Sharer/UpdateSharer"
import { ExpDetail } from "reducers/Exp";
import { combineReducers } from "redux";
import { Review } from "./Review";

export default combineReducers({
    Authentication,
    TopExp,
    AlarmList,
    DefaultList,
    UpdateExp,
    Comment,
    Community,
    Notice,
    User,
    MyDetail,
    Message,
    UpdateSharer,
    ExpDetail,
    Review,
});
