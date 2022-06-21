// ACTIONS

// SignIn
export const AUTH_SIGNIN = "AUTH_SIGNIN";
export const AUTH_SIGNIN_SUCCESS = "AUTH_SIGNIN_SUCCESS";
export const AUTH_SIGNIN_FAILURE = "AUTH_SIGNIN_FAILURE";
export const AUTH_SIGNIN_IS_NOT_MEMBER = "AUTH_SIGNIN_IS_NOT_MEMBER";
export const AUTH_SIGNIN_IS_NOT_PASSWORD = "AUTH_SIGNIN_IS_NOT_PASSWORD";
export const SET_ACTIVE = "SET_ACTIVE";

// FBSignIn
export const AUTH_FBSIGNIN = "AUTH_FBSIGNIN";
export const AUTH_FBSIGNIN_SUCCESS = "AUTH_FBSIGNIN_SUCCESS";
export const AUTH_FBSIGNIN_FAILURE = "AUTH_FBSIGNIN_FAILURE";
export const AUTH_FBSIGNIN_IS_NOT_MEMBER = "AUTH_FBSIGNIN_IS_NOT_MEMBER";

// FBSignUp
export const AUTH_FBSIGNUP = "AUTH_FBSIGNUP";
export const AUTH_FBSIGNUP_SUCCESS = "AUTH_FBSIGNUP_SUCCESS";
export const AUTH_FBSIGNUP_FAILURE = "AUTH_FBSIGNUP_FAILURE";
export const AUTH_FBSIGNUP_OVERLAP_MEMBER = "AUTH_FBSIGNUP_OVERLAP_MEMBER";

// LOGOUT
export const AUTH_SIGNOUT = "AUTH_SIGNOUT";

// Register
export const AUTH_SIGNUP = "AUTH_SIGNUP";
export const AUTH_SIGNUP_SUCCESS = "AUTH_SIGNUP_SUCCESS";
export const AUTH_SIGNUP_FAILURE = "AUTH_SIGNUP_FAILURE";

// login_chack
export const AUTH_CHECK_TOKEN = "AUTH_CHECK_TOKEN";
export const AUTH_CHECK_TOKEN_SUCCESS = "AUTH_CHECK_TOKEN_SUCCESS";
export const AUTH_CHECK_TOKEN_FAILURE = "AUTH_CHECK_TOKEN_FAILURE";

// email check
export const AUTH_CHECK_EMAIL = "AUTH_CHECK_EMAIL";
export const AUTH_CHECK_EMAIL_SUCCESS = "AUTH_CHECK_EMAIL_SUCCESS";
export const AUTH_CHECK_EMAIL_FAILURE = "AUTH_CHECK_EMAIL_FAILURE";

// pay user check
export const AUTH_CHECK_PAYUSER = "AUTH_CHECK_PAYUSER";
export const AUTH_CHECK_PAYUSER_SUCCESS = "AUTH_CHECK_PAYUSER_SUCCESS";
export const AUTH_CHECK_PAYUSER_FAILURE = "AUTH_CHECK_PAYUSER_FAILURE";

// nick_name check
export const AUTH_CHECK_NICKNAME = "AUTH_CHECK_NICKNAME";
export const AUTH_CHECK_NICKNAME_SUCCESS = "AUTH_CHECK_NICKNAME_SUCCESS";
export const AUTH_CHECK_NICKNAME_FAILURE = "AUTH_CHECK_NICKNAME_FAILURE";

// facebook user check
export const AUTH_CHECK_FBUSER = "AUTH_CHECK_FBUSER";
export const AUTH_CHECK_FBUSER_SUCCESS = "AUTH_CHECK_FBUSER_SUCCESS";
export const AUTH_CHECK_FBUSER_FAILURE = "AUTH_CHECK_FBUSER_FAILURE";

// top item 
export const GET_TOP_ITEM_LIST_SUCCESS = "GET_TOP_ITEM_LIST_SUCCESS";
export const GET_TOP_ITEM_LIST_FAILURE = "GET_TOP_ITEM_LIST_FAILURE";
export const GET_TOP_ITEM_LIST_CLEAR = "GET_TOP_ITEM_LIST_CLEAR";

// get alarm
export const GET_ALARM_LIST_SUCCESS = "GET_ALARM_LIST_SUCCESS";
export const GET_ALARM_LIST_FAILURE = "GET_ALARM_LIST_FAILURE";

// get default exp type
export const GET_DEFAULT_EXP_TYPE_SUCCESS = "GET_DEFAULT_EXP_TYPE_SUCCESS";
export const GET_DEFAULT_EXP_TYPE_FAILURE = "GET_DEFAULT_EXP_TYPE_FAILURE";

// get default  bank code
export const GET_DEFAULT_BANKCODE_SUCCESS = "GET_DEFAULT_BANKCODE_SUCCESS";
export const GET_DEFAULT_BANKCODE_FAILURE = "GET_DEFAULT_BANKCODE_FAILURE";

// get default  category
export const GET_DEFAULT_CATEGORY_SUCCESS = "GET_DEFAULT_CATEGORY_SUCCESS";
export const GET_DEFAULT_CATEGORY_FAILURE = "GET_DEFAULT_CATEGORY_FAILURE";

// get default  location
export const GET_DEFAULT_LOCATION_SUCCESS = "GET_DEFAULT_LOCATION_SUCCESS";
export const GET_DEFAULT_LOCATION_FAILURE = "GET_DEFAULT_LOCATION_FAILURE";

// add Exp
export const PUT_CREATE_EXP = "PUT_CREATE_EXP";
export const PUT_CREATE_EXP_SUCCESS = "PUT_CREATE_EXP_SUCCESS";
export const PUT_CREATE_EXP_FAILURE = "PUT_CREATE_EXP_FAILURE";

// add Exp
export const POST_MODIFY_EXP = "POST_MODIFY_EXP";
export const POST_MODIFY_EXP_SUCCESS = "POST_MODIFY_EXP_SUCCESS";
export const POST_MODIFY_EXP_FAILURE = "POST_MODIFY_EXP_FAILURE";

// user
export const GET_USER_DETAIL = "GET_USER_DETAIl";
export const GET_USER_DETAIL_SUCCESS = "GET_USER_DETAIL_SUCCESS";
export const GET_USER_DETAIL_FAILURE = "GET_USER_DETAIL_FAILURE";

// ARTICLE
export const GET_ARTICLE_LIST = "GET_ARTICLE_LIST";
export const GET_ARTICLE_LIST_FAIL = "GET_ARTICLE_LIST_FAIL";
export const GET_ARTICLE_TOTAL_COUNT = "GET_ARTICLE_TOTAL_COUNT";
export const GET_ARTICLE_COUNT_FAIL = "GET_ARTICLE_COUNT_FAIL";
export const WRITE_ARTICLE = "WRITE_ARTICLE";
export const WRITE_ARTICLE_FAIL = "WRITE_ARTICLE_FAIL";
export const ARTICLE_DETAIL_SUCCESS = "ARTICLE_DETAIL_SUCCESS";
export const ARTICLE_DETAIL_FAILED = "ARTICLE_DETAIL_FAILED";

// NOTICE
export const GET_NOTICE_LIST = "GET_ARTICLE_LIST";
export const GET_NOTICE_LIST_FAIL = "GET_ARTICLE_LIST_FAIL";
export const GET_NOTICE_TOTAL_COUNT = "GET_ARTICLE_TOTAL_COUNT";
export const GET_NOTICE_COUNT_FAIL = "GET_ARTICLE_COUNT_FAIL";
export const WRITE_NOTICE = "WRITE_ARTICLE";
export const WRITE_NOTICE_FAIL = "WRITE_ARTICLE_FAIL";
export const NOTICE_DETAIL_SUCCESS = "NOTICE_DETAIL_SUCCESS";
export const NOTICE_DETAIL_FAILED = "NOTICE_DETAIL_FAILED";

// point
export const GET_USER_POINT = "GET_USER_POINT";
export const GET_USER_POINT_SUCCESS = "GET_USER_POINT_SUCCESS";
export const GET_USER_POINT_FAILURE = "GET_USER_POINT_FAILURE";

// add point
export const SET_USER_POINT = "SET_USER_POINT";
export const SET_USER_POINT_SUCCESS = "SET_USER_POINT_SUCCESS";
export const SET_USER_POINT_FAILURE = "SET_USER_POINT_FAILURE";

// point history
export const GET_USER_POINT_HISTORY = "GET_USER_POINT_HISTORY";
export const GET_USER_POINT_HISTORY_SUCCESS = "GET_USER_POINT_HISTORY_SUCCESS";
export const GET_USER_POINT_HISTORY_FAILURE = "GET_USER_POINT_HISTORY_FAILURE";

// user register exp
export const GET_USER_REGISTER_EXP = "GET_USER_REGISTER_EXP";
export const GET_USER_REGISTER_EXP_SUCCESS = "GET_USER_REGISTER_EXP_SUCCESS";
export const GET_USER_REGISTER_EXP_FAILURE = "GET_USER_REGISTER_EXP_FAILURE";

// my sell exp
export const GET_USER_SELL_EXP = "GET_USER_SELL_EXP";
export const GET_USER_SELL_EXP_SUCCESS = "GET_USER_SELL_EXP_SUCCESS";
export const GET_USER_SELL_EXP_FAILURE = "GET_USER_SELL_EXP_FAILURE";

// like sharer
export const GET_USER_LIKE_SHARER = "GET_USER_LIKE_SHARER";
export const GET_USER_LIKE_SHARER_SUCCESS = "GET_USER_LIKE_SHARER_SUCCESS";
export const GET_USER_LIKE_SHARER_FAILURE = "GET_USER_LIKE_SHARER_FAILURE";

// like exp
export const GET_USER_LIKE_EXP = "GET_USER_LIKE_EXP";
export const GET_USER_LIKE_EXP_SUCCESS = "GET_USER_LIKE_EXP_SUCCESS";
export const GET_USER_LIKE_EXP_FAILURE = "GET_USER_LIKE_EXP_FAILURE";
