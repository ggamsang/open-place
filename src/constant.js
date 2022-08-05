export const WIDTH = (window.screen.width > 375 ? 375 : window.screen.width - 30);
// export const WIDTH = (window.screen.width - 30);
export const TokenName = "place-opensrcdesign-token";
export const LocalStorageName = "localStorage"

export const SPLITOR = `⛏`;


export const GET = {
    headers: {
        "Content-Type": "application/json"
    },
    method: "GET"
};
export const authGET = (token) => ({
    headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
    },
    method: "GET",
})
export const noauthPOST = (form) => ({
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(form)
})
export const POST = (token, form) => ({
    headers: {
        "Content-Type": "application/json",
        "X-Access-Token": token
    },
    method: "POST",
    body: JSON.stringify(form)
})
export const PUT = (token, form) => ({
    headers: {
        "Content-Type": "application/json",
        "X-Access-Token": token
    },
    method: "PUT",
    body: JSON.stringify(form)
})
export const DELETE = (token) => ({
    headers: {
        "Content-Type": "application/json",
        "X-Access-Token": token
    },
    method: "DELETE",
});
export const ExpTypes = {
    "NORMAL": 1,
    "COUNSELING": 2, // 자문/상담
    "LECTURING": 3, // 강좌
    "GAMING": 4, // 게임
    "MEETUP": 5, // 모임
};
