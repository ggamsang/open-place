import { LocalStorageName } from "constant";
import jwt_decode from "jwt-decode";

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_place_opendesign__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // Firefox를 제외한 모든 브라우저
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // 코드가 존재하지 않을 수도 있기 때문에 테스트 이름 필드도 있습니다.
            // Firefox를 제외한 모든 브라우저
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
            storage.length !== 0;
    }
}
const setTokenCookie = (tname, tvalue) => {
    const decode = jwt_decode(tvalue);
    const date = new Date(0);
    console.log({ decode });
    date.setUTCSeconds(decode.exp);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${tname}=${tvalue};${expires};path=/`;
}
// const setCookie = (cookie_name, value, days) => { ; }
export const SetSession = (key, data) => {
    return new Promise((resolve, reject) => {
        if (storageAvailable(LocalStorageName)) {
            window.localStorage.setItem(key, data)
        } else {
            setTokenCookie(key, data);//setCookie(key, data);
        }
        if (data === null || data === "null") {
            window.localStorage.removeItem(key);
        }
        resolve(data);
    });
};
export const getCookie = (cookie_name) => {
    var x, y;
    var val = document.cookie.split(';');

    for (var i = 0; i < val.length; i++) {
        x = val[i].substring(0, val[i].indexOf('='));
        y = val[i].substring(val[i].indexOf('=') + 1);
        x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
        if (x === cookie_name) {
            return y.toString('base64'); // unescape로 디코딩 후 값 리턴
        }
    }
    return null;
};

export const GetSession = (key) => {
    return new Promise((resolve, reject) => {
        let token = null;
        if (storageAvailable(LocalStorageName)) {
            token = window.localStorage.getItem(key);
        } else {
            token = getCookie(key);
        }
        if (token === "null" || token === null) {
            reject(null);
        } else {
            resolve(token);
        }
    });
};
