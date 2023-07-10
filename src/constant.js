export const WIDTH = window.screen.width > 375 ? 375 : window.screen.width - 30;
// export const WIDTH = (window.screen.width - 30);
export const TokenName = "place-opensrcdesign-token";
export const LocalStorageName = "localStorage";

export const SPLITOR = `⛏`;

export const GET = {
  headers: {
    "Content-Type": "application/json",
  },
  method: "GET",
};
export const authGET = (token) => ({
  headers: {
    "Content-Type": "application/json",
    "x-access-token": token,
  },
  method: "GET",
});
export const noauthPOST = (form) => ({
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
  body: JSON.stringify(form),
});
export const POST = (token, form) => ({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "Access-Control-Request-Method": "*",
    Accept: "application/json",
    "X-Access-Token": token,
  },
  method: "POST",
  body: JSON.stringify(form),
});
export const PUT = (token, form) => ({
  headers: {
    "Content-Type": "application/json",
    "X-Access-Token": token,
  },
  method: "PUT",
  body: JSON.stringify(form),
});
export const DELETE = (token) => ({
  headers: {
    "Content-Type": "application/json",
    "X-Access-Token": token,
  },
  method: "DELETE",
});
export const ExpTypes = {
  NORMAL: 1,
  COUNSELING: 2, // 자문/상담
  LECTURING: 3, // 강좌
  GAMING: 4, // 게임
  MEETUP: 5, // 모임
};

export const dummydata = [
  {
    type: "item",
    title: "앞 사람만 노 젖게 시키기",
    score: 3.5,
    tags: ["tag1", "tag2"],
    url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
  },
  {
    type: "item",
    title: "스파게티 코드를 작성하자!",
    score: 4.3,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
  },
  {
    type: "item",
    title: "멍때리며 놀자ㅡ!",
    score: 3.1,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc",
  },
  {
    type: "item",
    title: "결혼은 이렇게!",
    score: 4.0,
    tags: ["tag1", "tag2", "tag3"],
    url: "https://i.picsum.photos/id/1065/3744/5616.jpg?hmac=V64psST3xnjnVwmIogHI8krnL3edsh_sy4HNc3dJ_xY",
  },
];

const CATE_PLAY = { value: 1, name: "놀기" };
const CATE_LEARN = { value: 2, name: "배우기" };
const CATE_MAKE = { value: 3, name: "만들기" };
export const CATEs = [
  { value: 0, name: "카테고리(필수)" },
  CATE_PLAY,
  CATE_LEARN,
  CATE_MAKE,
];
const EXP_TYPE_MEET = { value: 1, name: "모임" };
const EXP_TYPE_LECT = { value: 2, name: "강의/강좌" };
const EXP_TYPE_CONS = { value: 3, name: "자문/상담" };
const EXP_TYPE_NORM = { value: 4, name: "일반" };
const EXP_TYPE_GAME = { value: 5, name: "게임" };
export const TYPEs = [
  { value: 0, name: "경험유형(필수)" },
  EXP_TYPE_MEET,
  EXP_TYPE_LECT,
  EXP_TYPE_CONS,
  EXP_TYPE_NORM,
  EXP_TYPE_GAME,
];
export const FILE = "FILE";
export const TEXT = "TEXT";
export const LINK = "LINK";