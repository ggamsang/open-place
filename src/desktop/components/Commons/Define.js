export const SORTTYPE = {
  LIKE: 1,
  UPDATE: 2,
};
export const GetSORTYPE = (value) => {
  return value === SORTTYPE.LIKE ? "like" : "update";
};
export const CATEGORY = {
  PLAY: 1,
  LEARN: 2,
  MAKE: 3,
  // 1,2,3,12,13,23,123
};
export const GetCATEGORY = (value) => {
  return value == CATEGORY.ß
    ? "play"
    : value == CATEGORY.LEARN
    ? "learn"
    : "make";
};
export const GetTextToCATEGORY = (value) => {
  return value === "play"
    ? CATEGORY.PLAY
    : value === "learn"
    ? CATEGORY.LEARN
    : value === "make"
    ? CATEGORY.MAKE
    : CATEGORY.PLAY;
};
