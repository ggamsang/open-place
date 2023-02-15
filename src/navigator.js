export const goto = (type, offset = null) => {
  switch (type) {
    case "EXP":
      window.location.href = "/exp/" + offset;
      break;
    case "PRIVACY":
      window.location.href = "/privacy";
      break;
    case "TERMS":
      window.location.href = "/terms";
      break;
    case "INTRO":
      window.location.href = "/intro";
      break;
    case "LOGIN":
    case "SIGNIN":
      window.location.href = "/signin";
      break;
    case "JOIN":
    case "SIGNUP":
      window.location.href = "/signup";
      break;
    case "FINDPW":
      window.location.href = "/findPW";
      break;
    case "MY-PAGE":
      window.location.href = "/mypage";
      break;
    case "MYDETAIL":
      window.location.href = "/myDetail/sub";
      break;
    case "MY-ITEM-BOUGHT":
      window.location.href = "/paidExp/" + offset;
      break;
    case "CREATE-ITEM-DESKTOP":
      window.location.href = "/createExp";
      break;
    case "CREATE-ITEM":
      window.location.href = "/createExp";
      break;
    case "CREATE-SHARER":
      window.location.href = "/createSharer";
      break;
    case "MODIFY-SHARER":
      window.location.href = "/modifySharer";
      break;
    case "MODIFY-USER":
      window.location.href = "/modifyUser";
      break;
    case "EXP-LIST":
      window.location.href = "/list";
      break;
    case "MAIN":
      window.location.href = "/";
      break;
    case "MOBILE-PLAY":
      window.location.href = `/play/${offset}`;
      break;
    case "MOBILE-MAKE":
      window.location.href = `/make/${offset}`;
      break;
    case "MOBILE-LEARN":
      window.location.href = `/learn/${offset}`;
      break;
    case "PLAY":
      window.location.href = `/play`;
      break;
    case "MAKE":
      window.location.href = `/make`;
      break;
    case "LEARN":
      window.location.href = `/learn`;
      break;
    case "SEARCH":
      window.location.href = `/search?${offset}`;
      break;
    case "COMMUNITY":
      window.location.href = "/community";
      break;
    case "WRITE":
      window.location.href = "/community/write";
      break;
    case "READ":
      window.location.href = "/community/" + offset;
      break;
    case "NOTICE":
      window.location.href = `/notice${offset ? "/" + offset : ""}`;
      break;
    case "MESSAGE":
      window.location.href = `/message${offset ? "/" + offset : ""}`;
      break;
    case "BUY":
      window.location.href = `/buy/${offset}`;
      break;

    case "BACK":
      window.history.go(-1);
      break;

    default:
      break;
  }
};
