import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    authReduxState: authReducer,
    cartReduxState: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const { dispatch } = store;
