import Authentication from "reducers/Authentication";
import Community from "reducers/Community";
import Comment from "reducers/Comment";
import Notice from "reducers/Notice";
import Message from "reducers/Message";
import { TopExp, UpdateExp } from "reducers/Exp";
import { AlarmList } from "reducers/Alarm";
import { DefaultList } from "reducers/Commons/DefaultList";
import { MyDetail, User, MyPoint } from "reducers/User";
import { UpdateSharer } from "reducers/Sharer/UpdateSharer"
import { ExpDetail } from "reducers/Exp";
import { ExpList } from "reducers/Exp";
import { ExpBought } from "reducers/Exp";
import { combineReducers } from "redux";
import { Review } from "./Review";
import { Contact } from "./Contact";

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
    Contact,
    ExpList,
    ExpBought,
    MyPoint,
});
