export const isMobile = () => false; // 500 > window.innerWidth;
export const isOpen = (ws) => ws.readyState === ws.OPEN;

//
export const MOBILE_WIDTH = 360;
export const SLIDE_MENU_WIDTH = 160;

// string
export const LoginText = "로그인";
export const CreateDesign = "디자인 등록";
export const CreateDesigner = "디자이너 등록";
export const CreateGroup = "그룹 등록";
export const DeleteDesign = "디자인 삭제";
export const strButtonNext = "다음";
export const strButtonPrev = "뒤로";
export const strButtonCancel = "취소";
export const strButtonComplete = "완료";
export const strButtonSave = "저장";
export const strErrorDoNotNextStep = "현재 단계를 완료해주세요.";
export const STRING_ALREADY_LOGINED = "이미 로그인 상태입니다.";

// bool
export const NOT = false;

//
export const TokenName = "opendesign_token";

export const msHour = 60 * 60 * 1000;
export const ms10Mins = 10 * 60 * 1000;
export const msMin = 60 * 1000;
export const ms10Secs = 10 * 1000;
export const msSec = 10 * 1000;
//
export const CATEGORY1_SOFTWARE = 6;
export const CATEGORY1_PRODUCT = 2;

export const PDFVIEWER_VERSION = "2.9"//"3.1.81";

const CATE_PLAY = { value: 1, name: "놀기" };
const CATE_LEARN = { value: 2, name: "배우기" };
const CATE_MAKE = { value: 3, name: "만들기" };
export const CATEs = [
  { value: 0, name: "카테고리(필수)" },
  CATE_PLAY,
  CATE_LEARN,
  CATE_MAKE,
];
export const EXP_TYPE_MEET = { value: 1, name: "모임" };
export const EXP_TYPE_LECT = { value: 2, name: "강의" };
export const EXP_TYPE_CONS = { value: 3, name: "상담" };
export const EXP_TYPE_NORM = { value: 4, name: "일반" };
export const EXP_TYPE_GAME = { value: 5, name: "게임" };
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