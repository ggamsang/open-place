import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "sign",
  initialState: { result: null, message: null },
  reducers: {
    SignIn: (state, { payload: { result } }) => {},
  },
});
export const { SignIn } = slice.actions;
export default slice.reducer;
export const SelectSignResult = (state) => state.sign.result;
