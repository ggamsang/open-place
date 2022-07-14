// ACTIONS

// action state
export const WAITING = "WAITING";
export const SUCCESS = "SUCCESS";
export const FAILED = "FAILED";

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
export const UPDATE_MODIFY_EXP = "UPDATE_MODIFY_EXP";
export const UPDATE_MODIFY_EXP_SUCCESS = "UPDATE_MODIFY_EXP_SUCCESS";
export const UPDATE_MODIFY_EXP_FAILURE = "UPDATE_MODIFY_EXP_FAILURE";


// ARTICLE
export const GET_ARTICLE_LIST = "GET_ARTICLE_LIST";
export const GET_ARTICLE_LIST_FAIL = "GET_ARTICLE_LIST_FAIL";
export const GET_ARTICLE_TOTAL_COUNT = "GET_ARTICLE_TOTAL_COUNT";
export const GET_ARTICLE_COUNT_FAIL = "GET_ARTICLE_COUNT_FAIL";
export const WRITE_ARTICLE = "WRITE_ARTICLE";
export const WRITE_ARTICLE_FAIL = "WRITE_ARTICLE_FAIL";
export const ARTICLE_DETAIL_SUCCESS = "ARTICLE_DETAIL_SUCCESS";
export const ARTICLE_DETAIL_FAILED = "ARTICLE_DETAIL_FAILED";

export const MODIFY_ARTICLE = "MODIFY_ARTICLE";
export const MODIFY_ARTICLE_SUCCESS = "MODIFY_ARTICLE_SUCCESS";
export const MODIFY_ARTICLE_FAILURE = "MODIFY_ARTICLE_FAILURE";

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
export const GET_USER_REGISTER_EXP_ZERO = "GET_USER_REGISTER_EXP_ZERO";
export const GET_USER_REGISTER_EXP_SUCCESS = "GET_USER_REGISTER_EXP_SUCCESS";
export const GET_USER_REGISTER_EXP_FAILURE = "GET_USER_REGISTER_EXP_FAILURE";

// my sell exp
export const GET_USER_SELL_EXP = "GET_USER_SELL_EXP";
export const GET_USER_SELL_EXP_ZERO = "GET_USER_SELL_EXP_ZERO";
export const GET_USER_SELL_EXP_SUCCESS = "GET_USER_SELL_EXP_SUCCESS";
export const GET_USER_SELL_EXP_FAILURE = "GET_USER_SELL_EXP_FAILURE";

// like sharer
export const GET_USER_LIKE_SHARER = "GET_USER_LIKE_SHARER";
export const GET_USER_LIKE_SHARER_ZERO = "GET_USER_LIKE_SHARER_ZERO";
export const GET_USER_LIKE_SHARER_SUCCESS = "GET_USER_LIKE_SHARER_SUCCESS";
export const GET_USER_LIKE_SHARER_FAILURE = "GET_USER_LIKE_SHARER_FAILURE";

// like exp
export const GET_USER_LIKE_EXP = "GET_USER_LIKE_EXP";
export const GET_USER_LIKE_EXP_ZERO = "GET_USER_LIKE_EXP_ZERO";
export const GET_USER_LIKE_EXP_SUCCESS = "GET_USER_LIKE_EXP_SUCCESS";
export const GET_USER_LIKE_EXP_FAILURE = "GET_USER_LIKE_EXP_FAILURE";

// comment
export const GET_ARTICLE_COMMENT = "GET_ARTICLE_COMMENT";
export const GET_ARTICLE_COMMENT_SUCCESS = "GET_ARTICLE_COMMENT_SUCCESS";
export const GET_ARTICLE_COMMENT_FAILURE = "GET_ARTICLE_COMMENT_FAILURE";
export const CREATE_ARTICLE_COMMENT = "CREATE_ARTICLE_COMMENT";
export const CREATE_ARTICLE_COMMENT_SUCCESS = "CREATE_ARTICLE_COMMENT_SUCCESS";
export const CREATE_ARTICLE_COMMENT_FAILURE = "CREATE_ARTICLE_COMMENT_FAILURE";

// mesage
export const GET_MESSAGE_GROUPS = "GET_MESSAGE_GROUPS";
export const GET_MESSAGE_GROUPS_SUCCESS = "GET_MESSAGE_GROUPS_SUCCESS";
export const GET_MESSAGE_GROUPS_FAILURE = "GET_MESSAGE_GROUPS_FAILURE";
export const GET_MESSAGE_DETAIL = "GET_MESSAGE_DETAIL";
export const GET_MESSAGE_DETAIL_SUCCESS = "GET_MESSAGE_DETAIL_SUCCESS";
export const GET_MESSAGE_DETAIL_FAILURE = "GET_MESSAGE_DETAIL_FAILURE";
export const GET_MESSAGE_OPPONENT = "GET_MESSAGE_OPPONENT";
export const GET_MESSAGE_OPPONENT_SUCCESS = "GET_MESSAGE_OPPONENT_SUCCESS";
export const GET_MESSAGE_OPPONENT_FAILURE = "GET_MESSAGE_OPPONENT_FAILURE";

// modify sharer profile
export const UPDATE_SHARER_PROFILE = "UPDATE_SHARER_PROFILE";
export const UPDATE_SHARER_PROFILE_SUCCESS = "UPDATE_SHARER_PROFILE_SUCCESS";
export const UPDATE_SHARER_PROFILE_FAILURE = "UPDATE_SHARER_PROFILE_FAILURE";

// get exp detail 
export const GET_EXP_DETAIL = "GET_EXP_DETAIL";
export const GET_EXP_DETAIL_SUCCESS = "GET_EXP_DETAIL_SUCCESS";
export const GET_EXP_DETAIL_FAILURE = "GET_EXP_DETAIL_FAILURE";

// modify my profile
export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
export const UPDATE_USER_PROFILE_FAILURE = "UPDATE_USER_PROFILE_FAILURE";

// sharer
export const GET_SHARER_DETAIL = "GET_SHARER_DETAIL";
export const GET_SHARER_DETAIL_SUCCESS = "GET_SHARER_DETAIL_SUCCESS";
export const GET_SHARER_DETAIL_FAILURE = "GET_SHARER_DETAIL_FAILURE";

export const DELETE_SHARER = "DELETE_SHARER";
export const DELETE_SHARER_SUCCESS = "DELETE_SHARER_SUCCESS";
export const DELETE_SHARER_FAILURE = "DELETE_SHARER_FAILURE";

// review
export const CREATE_REVIEW_SUCCESS = "CREATE_REVIEW_SUCCESS";
export const CREATE_REVIEW_FAILURE = "CREATE_REVIEW_FAILURE";
export const GET_REVIEW_SUCCESS = "GET_REVIEW_SUCCESS";
export const GET_REVIEW_FAILURE = "GET_REVIEW_FAILURE";
export const GET_REVIEW_LIST_SUCCESS = "GET_REVIEW_SUCCESS";
export const GET_REVIEW_LIST_FAILURE = "GET_REVIEW_FAILURE";
export const UPDATE_REVIEW_SUCCESS = "UPDATE_REVIEW_SUCCESS";
export const UPDATE_REVIEW_FAILURE = "UPDATE_REVIEW_FAILURE";
export const DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS";
export const DELETE_REVIEW_FAILURE = "DELETE_REVIEW_FAILURE";

// get exp LIST 
export const GET_EXP_LIST = "GET_EXP_LIST";
export const GET_EXP_LIST_ZERO = "GET_EXP_LIST_ZERO";
export const GET_EXP_LIST_SUCCESS = "GET_EXP_LIST_SUCCESS";
export const GET_EXP_LIST_FAILURE = "GET_EXP_LIST_FAILURE";
// get exp BOUGHT LIST
export const GET_USER_BOUGHT_EXP = "GET_USER_BOUGHT_EXP";
export const GET_USER_BOUGHT_EXP_ZERO = "GET_USER_BOUGHT_EXP_ZERO";
export const GET_USER_BOUGHT_EXP_SUCCESS = "GET_USER_BOUGHT_EXP_SUCCESS";
export const GET_USER_BOUGHT_EXP_FAILURE = "GET_USER_BOUGHT_EXP_FAILURE";
// get exp Bought Detail
export const GET_USER_BOUGHT_EXP_DETAIL ="GET_USER_BOUGHT_EXP_DETAIL";
export const GET_USER_BOUGHT_EXP_DETAIL_SUCCESS ="GET_USER_BOUGHT_EXP_DETAIL_SUCCESS";
export const GET_USER_BOUGHT_EXP_DETAIL_FAILURE ="GET_USER_BOUGHT_EXP_DETAIL_FAILURE";

// get counseling message group
export const GET_COUNSELING_MESSAGE_GOUP = "GET_COUNSELING_MESSAGE_GOUP";
export const GET_COUNSELING_MESSAGE_GOUP_SUCCESS = "GET_COUNSELING_MESSAGE_GOUP_SUCCESS";
export const GET_COUNSELING_MESSAGE_GOUP_FAILURE = "GET_COUNSELING_MESSAGE_GOUP_FAILURE";

export const GET_GAME_EXP_DETAIL = "GET_GAME_EXP_DETAIL"
export const GET_GAME_EXP_DETAIL_SUCCESS = "GET_GAME_EXP_DETAIL_SUCCESS"
export const GET_GAME_EXP_DETAIL_FAILURE = "GET_GAME_EXP_DETAIL_FAILURE"

// Point
export const GET_POINT_LIST = "GET_POINT_LIST";
export const GET_POINT_LIST_FAIL = "GET_POINT_LIST_FAIL";
export const GET_POINT_TOTAL_COUNT = "GET_POINT_TOTAL_COUNT";
export const GET_POINT_COUNT_FAIL = "GET_POINT_COUNT_FAIL";

export const GET_CURRENT_POINT = "GET_CURRENT_POINT";
export const GET_CURRENT_POINT_FAILED = "GET_CURRENT_POINT_FAILED";
export const CHARGE_MY_POINT = "CHARGE_MY_POINT";
export const CHARGE_MY_POINT_FAILED = "CHARGE_MY_POINT_FAILED";
