import * as types from "actions/ActionTypes";
import host from "config"
const GET = {
  headers: { "Content-Type": "application/json" },
  method: "GET"
};
// action creators
const GetArticleList = data => ({ type: types.GET_ARTICLE_LIST, payload: data });
const ArticleListFail = () => ({ type: types.GET_ARTICLE_LIST_FAIL, payload: [] });
const GetTotalArticleCount = data => ({ type: types.GET_ARTICLE_TOTAL_COUNT, payload: data });
const ArticleCountFail = () => ({ type: types.GET_ARTICLE_COUNT_FAIL, payload: [] });
const WriteArticleSuccess = () => ({ type: types.WRITE_ARTICLE, payload: [] });
const WriteArticleFail = () => ({ type: types.WRITE_ARTICLE_FAIL, payload: [] });
const ArticleDetailSuccess = (data) => ({ type: types.ARTICLE_DETAIL_SUCCESS, payload: data });
const ArticleDetailFailed = () => ({ type: types.ARTICLE_DETAIL_FAILED, });

// api
export const GetArticleListRequest = (page) => {
  return dispatch => {
    const url = `${host}/community/list/${page}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data =>
        data.success
          ? dispatch(GetArticleList(data.detail))
          : GetArticleList([]))
      .catch(err => dispatch(ArticleListFail()))
  }
};
export const GetTotalArticleCountRequest = () => {
  return dispatch => {
    const url = `${host}/community/list`;
    return fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    })
      .then(res => res.json())
      .then(data =>
        data.success
          ? dispatch(GetTotalArticleCount(data.detail.total))
          : GetArticleList([]))
      .catch(err => dispatch(ArticleCountFail()))
  }
};
export const WriteArticleRequest = ({ form, token }) => {
  return dispatch => {
    const url = `${host}/community/`;
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": token
      },
      method: "POST",
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => data.success && dispatch(WriteArticleSuccess(data.detail)))
      .catch(err => dispatch(WriteArticleFail()))
  }
};
export const GetArticleDetailRequest = (id) => {
  return dispatch => {
    const url = `${host}/community/${id}`;
    return fetch(url, GET)
      .then(res => res.json())
      .then(data => dispatch(ArticleDetailSuccess(data.detail)))
      .catch(err => dispatch(ArticleDetailFailed()))
  }
};


