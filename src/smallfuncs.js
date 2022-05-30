export const goto = (type, offset = null) => {
    switch (type) {
        case "PRIVACY": window.location.href = "/privacy"; break;
        case "TERMS": window.location.href = "/terms"; break;
        case "INTRO": window.location.href = "/intro"; break;
        case "LOGIN": window.location.href = "/login"; break;
        case "SIGNUP": window.location.href = "/join"; break;
        case "MYDETAIL": window.location.href = "/myDetail/sub"; break;
        case "CREATE-ITEM": window.location.href = "/createitem"; break;
        case "CREATE-SHARER": window.location.href = "/createSharer"; break;
        case "MODIFY-SHARER": window.location.href = "/modifySharer"; break;
        case "EXP-LIST": window.location.href = "/list"; break;
        case "MAIN": window.location.href = "/"; break;

        case "PLAY": window.location.href = "/list"; break;
        case "LEARN": window.location.href = "/list"; break;
        case "MAKE": window.location.href = "/list"; break;
        case "COMMUNITY": window.location.href = "/community"; break;
        case "WRITE": window.location.href = "/community/write"; break;
        case "READ": window.location.href = "/community/" + offset; break;
        default: break;
    }
}