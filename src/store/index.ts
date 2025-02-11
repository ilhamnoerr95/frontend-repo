import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./loginSlice";

export const store = configureStore({ reducer: { auth: authReducer } });

// type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
