import * as types from "actions/ActionTypes";
import host from "config"
import { GET, POST } from "constant";

// API + ActionCreator
// 댓글가져오기
export const GetArticleCommentRequest = (id) => {
  return dispatch => {
    dispatch(GetArticleComment());
    console.log(`${host}/comment/ofarticle/${id}`);
    return fetch(`${host}/comment/ofarticle/${id}`, GET)
      .then(res => res.json())
      .then(res => dispatch(GetArticleCommentSuccess(res.detail)))
      .catch(_ => dispatch(GetArticleCommentFailure()));
  };
};
export const GetArticleComment = () => ({
  type: types.GET_ARTICLE_COMMENT
});
export const GetArticleCommentSuccess = comment => ({
  type: types.GET_ARTICLE_COMMENT_SUCCESS,
  Comment: comment
});
export const GetArticleCommentFailure = () => ({
  type: types.GET_ARTICLE_COMMENT_FAILURE,
});

// 댓글생성
export const CreateArticleCommentRequest = (token, form) => {
  return dispatch => {
    dispatch(CreateArticleComment());
    return fetch(`${host}/comment`, POST(token, form))
      .then(res => res.json())
      .then(res => dispatch(CreateArticleCommentSuccess(res)))
      .catch(_ => dispatch(CreateArticleCommentFailure()));
  };
};
export const CreateArticleComment = () => ({
  type: types.CREATE_ARTICLE_COMMENT
});
export const CreateArticleCommentSuccess = res => ({
  type: types.CREATE_ARTICLE_COMMENT_SUCCESS,
  data: res
});
export const CreateArticleCommentFailure = () => ({
  type: types.CREATE_ARTICLE_COMMENT_FAILURE
});

// // 댓글삭제
// export const DeleteArticleCommentRequest = (
//   design_id,
//   comment_id,
//   token
// ) => {
//   return dispatch => {
//     dispatch(DeleteArticleComment());
//     return fetch(
//       `${host}/design/designDetail/${design_id}/deleteDetailComment/${comment_id}`,
//       {
//         headers: {
//           "x-access-token": token,
//           "Content-Type": "application/json"
//         },
//         method: "DELETE"
//       }
//     )
//       .then(res => res.json())
//       .then(function (res) {
//         return dispatch(DeleteArticleCommentSuccess(res));
//       })
//       .catch(error => {
//         console.log("insert issue err", error);
//         return dispatch(DeleteArticleCommentFailure(error));
//       });
//   };
// };
// export const DeleteArticleComment = () => ({
//   type: types.DELETE_ARTICLE_COMMENT
// });
// export const DeleteArticleCommentSuccess = res => ({
//   type: types.DELETE_ARTICLE_COMMENT_SUCCESS,
//   data: res
// });
// export const DeleteArticleCommentFailure = error => ({
//   type: types.DELETE_ARTICLE_COMMENT_FAILURE
// });