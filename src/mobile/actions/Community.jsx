import * as types from "src/mobile/actions/ActionTypes";
import host from "src/config";
import { GET } from "src/constants";

// action creators
const GetArticleList = (data) => ({
  type: types.GET_ARTICLE_LIST,
  payload: data,
});
const ArticleListFail = () => ({
  type: types.GET_ARTICLE_LIST_FAIL,
  payload: [],
});

const GetTotalArticleCount = (data) => ({
  type: types.GET_ARTICLE_TOTAL_COUNT,
  payload: data,
});
const ArticleCountFail = () => ({
  type: types.GET_ARTICLE_COUNT_FAIL,
  payload: [],
});

const WriteArticleSuccess = () => ({ type: types.WRITE_ARTICLE, payload: [] });
const WriteArticleFail = () => ({
  type: types.WRITE_ARTICLE_FAIL,
  payload: [],
});

const ArticleDetailSuccess = (data) => ({
  type: types.ARTICLE_DETAIL_SUCCESS,
  payload: data,
});
const ArticleDetailFailed = () => ({ type: types.ARTICLE_DETAIL_FAILED });

const ModifyArticle = () => ({ type: types.MODIFY_ARTICLE });
const ModifyArticleSuccess = () => ({
  type: types.MODIFY_ARTICLE_SUCCESS,
  result: "success",
});
const ModifyArticleFailure = () => ({
  type: types.MODIFY_ARTICLE_FAILURE,
  result: "failure",
});

// api
export const GetArticleListRequest = (page) => {
  return (dispatch) => {
    const url = `${host}/community/list/${page}`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) =>
        data.success
          ? dispatch(GetArticleList(data.detail))
          : GetArticleList([])
      )
      .catch((err) => dispatch(ArticleListFail()));
  };
};
export const GetTotalArticleCountRequest = () => {
  return (dispatch) => {
    const url = `${host}/community/list`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) =>
        data.success
          ? dispatch(GetTotalArticleCount(data.detail.total))
          : GetArticleList([])
      )
      .catch((err) => dispatch(ArticleCountFail()));
  };
};
export const WriteArticleRequest = ({ form, token }) => {
  return (dispatch) => {
    const url = `${host}/community/`;
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": token,
      },
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(
        (data) => data.success && dispatch(WriteArticleSuccess(data.detail))
      )
      .catch((err) => dispatch(WriteArticleFail()));
  };
};

export const ModifyArticleRequest = (article_id, data, token) => {
  return (dispatch) => {
    ModifyArticle();
    const url = `${host}/community/${article_id}`;
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": token,
      },
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => data.success && dispatch(ModifyArticleSuccess()))
      .catch((err) => dispatch(ModifyArticleFailure()));
  };
};

export const GetArticleDetailRequest = (id) => {
  return (dispatch) => {
    const url = `${host}/community/${id}`;
    return fetch(url, GET)
      .then((res) => res.json())
      .then((data) => dispatch(ArticleDetailSuccess(data.detail)))
      .catch((err) => dispatch(ArticleDetailFailed()));
  };
};
