import host from "config";

let validates = function() {};
let message = "";

let Validates = new validates();

Validates.NotRequired = function(data) {
  if (data === "" || data === undefined || data === null || data === []) {
    return true;
  } else {
    return false;
  }
};
// 필수항목 체크 내용이 비어있는지를 검사한다.
Validates.Required = function(data, target) {
  //console.log("1", data);
  return new Promise(function(resolve, reject) {
    if (
      data === "" ||
      data === undefined ||
      data === null ||
      data === [] ||
      data.length === 0
    ) {
      message = "필수항목입니다.";
      reject({ message, target });
    } else {
      resolve(true);
    }
  });
};

Validates.Photos = function(data, target) {
  return new Promise(function(resolve, reject) {
    if (data === [] || data === undefined || data === null) {
      message = "사진을 선택하세요.";
      reject({ message, target });
    } else {
      if (data.length > 6) {
        message = "사진은 6장까지만 등록이 가능합니다.";
        reject({ message, target });
      } else {
        resolve(true);
      }
    }
  });
};

// 체크박스의 체크가 되어있는지를 구분한다.
Validates.Checked = function(data, target) {
  return new Promise(function(resolve, reject) {
    if (data === true) {
      resolve(true);
    } else {
      message = "체크해주세요.";
      reject({ message, target });
    }
  });
};

Validates.MaxLength = function(data, target, length) {
  //console.log("length", length);
  return new Promise(function(resolve, reject) {
    let leng = Number(length);
    let strValue;
    let strLen;
    strValue = data;
    if (data === [] || data === undefined || data === null || data === "") {
      strLen = 0;
    } else {
      strLen = strValue.length;
    }

    // 넘어가는 글자는 자른다.
    //console.log("총 글자의 길이 : ", strLen);
    if (strLen <= leng) {
      resolve(true);
    } else {
      message = leng + "자 이하로 입력 할 수 있습니다.";
      reject({ message, target });
    }
  });
};
Validates.MinLength = function(data, target, length) {
  //console.log("min", length);
  return new Promise(function(resolve, reject) {
    let leng = Number(length);
    let strValue;
    let strLen;
    strValue = data;
    if (data === [] || data === undefined || data === null || data === "") {
      strLen = 0;
    } else {
      strLen = strValue.length;
    }

    // 넘어가는 글자는 자른다.
    //console.log("총 글자의 길이 : ", strLen);
    if (strLen >= leng) {
      resolve(true);
    } else {
      message = leng + "자 이하로 입력 할 수 없습니다.";
      reject({ message, target });
    }
  });
};

Validates.IsEmail = function(data, target) {
  //console.log("3");
  return new Promise(function(resolve, reject) {
    let regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
    if (data === [] || data === undefined || data === null || data === "") {
      data = "";
    }
    if (data.match(regExp)) {
      resolve(true);
    } else {
      message = "E-Mail을 올바르게 입력해주세요.";
      reject({ message, target });
    }
  });
};

Validates.IsPhone = function(data, target) {
  //console.log("phone Data :", data);
  return new Promise(function(resolve, reject) {
    let regExp = /^[0-9]+$/;
    let isPhoneArray = [];
    isPhoneArray = [
      Validates.MinLength(data, target, 11),
      Validates.MaxLength(data, target, 11)
    ];
    new Promise.all(isPhoneArray).then(
      function(res) {
        //console.log("isPhone:", res);
        if (data.match(regExp)) {
          resolve(true);
        } else {
          message = "핸드폰번호가 올바르지 않습니다.";
          reject({ message, target });
        }
      },
      function(err) {
        message = "핸드폰번호가 올바르지 않습니다.";
        reject({ message, target });
      }
    );
  });
};

Validates.SamePassword = function(data, target) {
  console.log(data);
  return new Promise(function(resolve, reject) {
    if (data[0] === data[1]) {
      resolve(true);
    } else {
      message = "비밀번호가 다릅니다.";
      reject({ message, target });
    }
  });
};

Validates.OnlyNotNumber = function(data, target) {
  return new Promise(function(resolve, reject) {
    if (Validates.NotRequired(data)) {
      resolve(true);
    } else {
      let regExp = /^[0-9]+$/;
      if (data.match(regExp)) {
        message = "숫자만 입력할 수 없습니다.";
        reject({ message, target });
      } else {
        resolve(true);
      }
    }
  });
};

Validates.OnlyImages = (data, target) => {
  return new Promise(async (resolve, reject) => {
    if (Validates.NotRequired(data)) {
      resolve(true);
    } else {
      if (data.length === 0) {
        resolve(true);
      }
      for (let item of data) {
        //console.log("OnlyImages", item);
        if (
          item.type === "image/jpeg" ||
          item.type === "image/png" ||
          item.type === "image/bmp" ||
          item.type === "image/gif"
          // item.type === "image/webp"
        ) {
          await resolve(true);
        } else {
          message = "해당 확장자는 업로드할 수 없습니다";
          await reject({ message, target });
        }
      }
    }
  });
};

Validates.MaxFileSize = (data, target, size) => {
  return new Promise(async (resolve, reject) => {
    if (Validates.NotRequired(data)) {
      resolve(true);
    } else {
      if (data.length === 0) {
        resolve(true);
      }
      for(let item of data) {
        if (item.size < Number(size)) {
          await resolve(true);
        } else {
          message = "파일 용량이 너무 큽니다.";
          await reject({ message, target });
        }
      }
    }
  });
};

Validates.NotSpecialCharacters = (data, target) => {
  return new Promise((resolve, reject) => {
    if (Validates.NotRequired(data)) {
      resolve(true);
    } else {
      let regExp = /^[a-zA-Zㄱ-힣0-9~!_]*$/i;
      if (!data.match(regExp)) {
        message = "'~','!','_' 를 제외한 특수문자는 사용할 수 없습니다.";
        reject({ message, target });
      } else {
        resolve(true);
      }
    }
  });
};

Validates.NotBlank = (data, target) => {
  return new Promise((resolve, reject) => {
    if (Validates.NotRequired(data)) {
      resolve(true);
    } else {
      let regExp = /[\s]/g;
      if (data.match(regExp)) {
        message = "공백은 사용할 수 없습니다.";
        reject({ message, target });
      } else {
        resolve(true);
      }
    }
  });
};

Validates.CheckEmail = (data, target) => {
  //console.log("??", data);
  return new Promise(async (resolve, reject) => {
    if (Validates.NotRequired(data)) {
      await resolve(true);
    } else {
      await fetch(`${host}/users/checkEmail`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ email: data })
      })
        .then(res => res.json())
        .then(async res => {
          if (res.success) {
            await resolve(true);
          } else {
            message = "중복된 E-Mail입니다.";
            await reject({ message, target });
          }
        })
        .catch(err => {
          message = "중복된 E-Mail입니다.";
          reject({ message, target });
        });
    }
  });
};

Validates.CheckNickName = (data, target) => {
  return new Promise((resolve, reject) => {
    if (Validates.NotRequired(data)) {
      resolve(true);
    } else {
      fetch(`${host}/users/checkNickName`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ nick_name: data })
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            resolve(true);
          } else {
            message = "중복된 닉네임입니다.";
            reject({ message, target });
          }
        })
        .catch(err => {
          message = "중복된 닉네임입니다.";
          reject({ message, target });
        });
    }
  });
};

Validates.CheckFBUser = (data, target) => {
  return new Promise((resolve, reject) => {
    if (Validates.NotRequired(data)) {
      resolve(true);
    } else {
      fetch(`${host}/users/checkFBUser`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ FB_user_id: data })
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            resolve(true);
          } else {
            message = "이미 등록 된 회원입니다.";
            reject({ message, target });
          }
        })
        .catch(err => {
          message = "이미 등록 된 회원입니다.";
          reject({ message, target });
        });
    }
  });
};


export const FormControl = async obj => {
  //console.log("obj", typeof obj);
  if (obj === null) {
    //console.log("nulll");
  }
  if (!obj || !obj.hasOwnProperty("value")) return Promise.resolve(true);
  //console.log("4", obj);
  // 검사받을 하나의 validation
  // console.log("검사받을 인풋의 arg : ", list);
  let value = obj.value; // 전달받은 인풋의 데이터
  let target = obj.target; // validation할 대상의 이름
  let fnList = [...obj.validates]; // validation할 함수들의 리스트
  let fnData = null;
  let qArray = []; // Promise를 저장할 배열

  for (let i = 0; i < fnList.length; i++) {
    // fnList에 전달받은 검사항목들을 매칭시켜 qArray에 담는다.
    if (fnList[i].indexOf("(") > -1) {
      let fn = fnList[i].split("(");
      let fnDatas = fn[1].split(")");
      fnList[i] = fn[0];
      fnData = fnDatas[0];
      //console.log("fn : ", fn, "fnDatas :", fnDatas, "fnList[i] :", fnList[i], "fnData : ", fnData);
    }
    if (Validates[fnList[i]]) {
      await qArray.push(Validates[fnList[i]](value, target, fnData));
    }
  }
  return new Promise(function (resolve, reject) {
    //console.log("5");
    target.classList.remove("error");
    target.nextSibling.textContent = "";
    if (qArray.length === 0) resolve(true);
    Promise.all(qArray)
      .then(res => {
        console.log(target, res);
        resolve(true);
      })
      .catch(err => {
        target.classList.add("error");
        target.nextSibling.textContent = err.message;
        reject(err);
      });
  });
};
