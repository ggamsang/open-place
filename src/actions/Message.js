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

// FOR COUNSELING //
export const GetCounselingMessageGroupRequest = (token, id) => {
  return dispatch => {
    dispatch(GetCounselingMessageGroup());
    const url = ``;
    return fetch(url, authGET(token, id))
      .then(res => res.json())
      .then(res => dispatch(GetCounselingMessageGroupSuccess(res.detail)))
      .catch(_ => dispatch(GetCounselingMessageGroupFailure()));
  };
};
export const GetCounselingMessageGroup = () => ({
  type: types.GET_COUNSELING_MESSAGE_GOUP
});
export const GetCounselingMessageGroupSuccess = (detail) => ({
  type: types.GET_COUNSELING_MESSAGE_GOUP_SUCCESS,
  detail: detail
});
export const GetCounselingMessageGroupFailure = () => ({
  type: types.GET_COUNSELING_MESSAGE_GOUP_FAILURE,
  detail: null
});