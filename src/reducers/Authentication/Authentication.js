import * as types from "actions/ActionTypes";
import update from "react-addons-update";

// initial state
const initialState = {
  isActive: "INIT",
  login: { status: "INIT" },
  check: { status: "INIT" },
  status: {
    valid: false,
    token: null,
    userInfo: null,
    isLoggedIn: false,
  },
  checkStatus: {
    checkNickName: false,
    checkEmail: false,
  },
}
// reducer
export default function Authentication(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }

  console.log("track redux: ", action);
  
  switch (action.type) {
    case types.SET_ACTIVE:
      return update(state, {
        isActive: { $set: action.active }
      });
    case types.AUTH_CHECK_TOKEN:
      return update(state, {
        status: {
          isLoggedIn: { $set: true }
        }
      });
    case types.AUTH_CHECK_TOKEN_SUCCESS:
      return update(state, {
        status: {
          userInfo: { $set: action.info },
          token: { $set: action.token },
          valid: { $set: true }
        }
      });
    case types.AUTH_CHECK_TOKEN_FAILURE:
      return update(state, {
        status: {
          valid: { $set: false },
          isLoggedIn: { $set: false },
          userInfo: { $set: null },
          token: { $set: null }
        }
      });
    case types.AUTH_CHECK_EMAIL:
      return update(state, {
        check: {
          status: { $set: "WAITING" }
        }
      });
    case types.AUTH_CHECK_EMAIL_SUCCESS:
      return update(state, {
        check: {
          status: { $set: "SUCCESS" }
        },
        checkStatus: {
          checkEmail: { $set: action.checkEmail }
        }
      });
    case types.AUTH_CHECK_EMAIL_FAILURE:
      return update(state, {
        check: {
          status: { $set: "FAILURE" }
        },
        checkStatus: {
          checkEmail: { $set: action.checkEmail }
        }
      });
    case types.AUTH_CHECK_NICKNAME:
      return update(state, {
        check: {
          status: { $set: "WAITING" }
        }
      });
    case types.AUTH_CHECK_NICKNAME_SUCCESS:
      return update(state, {
        check: {
          status: { $set: "SUCCESS" }
        },
        checkStatus: {
          checkNickName: { $set: action.checkNickName }
        }
      });
    case types.AUTH_CHECK_NICKNAME_FAILURE:
      return update(state, {
        check: {
          status: { $set: "FAILURE" }
        },
        checkStatus: {
          checkNickName: { $set: action.checkNickName }
        }
      });
    case types.AUTH_SIGNIN_SUCCESS:
      return update(state, {
        status: {
          valid: { $set: true },
          isLoggedIn: { $set: true },
          token: { $set: action.token }
        }
      });
    case types.AUTH_SIGNOUT:
      return update(state, {
        status: {
          valid: { $set: false },
          isLoggedIn: { $set: false },
          token: { $set: null },
          userInfo: { $set: null }
        }
      });
    default:
      return state;
  }
}
