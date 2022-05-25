export const goto = (type) => {
    switch (type) {
        case "PRIVACY": window.location.href = "/privacy"; break;
        case "TERMS": window.location.href = "/terms"; break;
        case "INTRO": window.location.href = "/intro"; break;
        case "LOGIN": window.location.href = "/login"; break;
        case "SIGNUP": window.location.href = "/join"; break;
        case "MYDETAIL": window.location.href = "/myDetail/0"; break;
        case "CREATE-ITEM": window.location.href = "/createitem"; break;
        case "MAIN": window.location.href = "/"; break;
        default: break;
    }
}