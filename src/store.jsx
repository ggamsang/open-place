import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import signReducer from "./slices/sign";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sign: signReducer,
  },
});

export default store;
