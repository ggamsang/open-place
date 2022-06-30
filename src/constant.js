export const WIDTH = (window.screen.width > 375 ? 375 : window.screen.width - 30);
// export const WIDTH = (window.screen.width - 30);
export const TokenName = "place-opensrcdesign-token";
export const LocalStorageName = "localStorage"

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