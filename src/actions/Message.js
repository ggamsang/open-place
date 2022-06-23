import * as types from "actions/ActionTypes";
import host from "config"
import { authGET, } from "constant";

// 메시지목록 가져오기
export const GetMessageGroupRequest = (page, token) => {
  return dispatch => {
    dispatch(GetMessageGroup());
    return fetch(`${host}/message/${page}`, authGET(token))
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return dispatch(GetMessageGroupSuccess(data.detail));
      })
      .catch(_ => dispatch(GetMessageGroupFailure()));
  };
};
export const GetMessageGroup = () => ({
  type: types.GET_MESSAGE_GROUP
});
export const GetMessageGroupSuccess = (groups) => ({
  type: types.GET_MESSAGE_GROUP_SUCCESS,
  groups: groups
});
export const GetMessageGroupFailure = () => ({
  type: types.GET_MESSAGE_GROUP_FAILURE,
});

// 메시지 상세
export const GetMessageDetailRequest = (token, page, group_id) => {
  return dispatch => {
    dispatch(GetMessageDetail());
    return fetch(`${host}/message/${group_id}/detail/${page}`, authGET(token))
      .then(res => res.json())
      .then(res => dispatch(GetMessageDetailSuccess(res.detail)))
      .catch(_ => dispatch(GetMessageDetailFailure()));
  };
};
export const GetMessageDetail = () => ({
  type: types.GET_MESSAGE_DETAIL
});
export const GetMessageDetailSuccess = (detail) => ({
  type: types.GET_MESSAGE_DETAIL_SUCCESS,
  detail: detail
});
export const GetMessageDetailFailure = () => ({
  type: types.GET_MESSAGE_DETAIL_FAILURE
});


export const GetMessageOpponentInfoRequest = (token, group_id) => {
  return dispatch => {
    dispatch(GetMessageOpponentInfo());
    return fetch(`${host}/message/${group_id}/detail`, authGET(token))
      .then(res => res.json())
      .then(res => dispatch(GetMessageOpponentInfoSuccess(res.info)))
      .catch(_ => dispatch(GetMessageOpponentInfoFailure()));
  };
};
export const GetMessageOpponentInfo = () => ({
  type: types.GET_MESSAGE_OPPONENT
});
export const GetMessageOpponentInfoSuccess = (info) => ({
  type: types.GET_MESSAGE_OPPONENT_SUCCESS,
  info: info
});
export const GetMessageOpponentInfoFailure = () => ({
  type: types.GET_MESSAGE_OPPONENT_FAILURE
});
/*
message_group 
uid, create_at 
'1', '2022-06-22 16:09:32'
'2', '2022-06-22 16:09:32'
'3', '2022-06-22 16:09:32'
_
SELECT * FROM message M 
WHERE M.chat_group_id IN (SELECT chat_group_id FROM message_group_user WHERE user_id = id) 
ORDER BY create_at
GROUP BY chat_group_id
message_group_user 
uid, chat_group_id, user_id
'1', '1', '1'
'2', '1', '7'
'3', '2', '1'
'4', '2', '9'
'5', '3', '7'
'6', '3', '9'   말걸때 찾아보고 없으면 두 레코드를 만듦.
_
message
uid, chat_group_id, user_id, message, create_at, read_at
'1', '1', '1', '테스트1', '2022-06-22 16:14:04', NULL
'2', '1', '1', '테스트2', '2022-06-22 16:14:04', NULL
'5', '1', '7', '테스트5', '2022-06-22 16:14:04', NULL
'3', '2', '1', '테스트3', '2022-06-22 16:14:04', NULL
'4', '2', '9', '테스트4', '2022-06-22 16:14:04', NULL
'6', '2', '9', '테스트6', '2022-06-22 16:14:04', NULL
'7', '3', '7', '테스트7', '2022-06-22 16:14:04', NULL
_
*/
