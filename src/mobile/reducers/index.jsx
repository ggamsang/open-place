import { combineReducers } from "redux";

import Authentication from "./Authentication";
import Community from "./Community";
import Comment from "./Comment";
import Notice from "./Notice";
import Message from "./Message";
import { AlarmList } from "./Alarm";
import { DefaultList } from "./DefaultList";
import { MyDetail, User, MyPoint } from "./User";
import { UpdateSharer } from "./UpdateSharer";
import { TopExp, UpdateExp, ExpDetail, ExpList, ExpBought } from "./Exp";
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
