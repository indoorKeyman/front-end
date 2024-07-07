import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "js-cookie";
import userSlice from "./userSlice";
import enrollSlice from "./enrollSlice";
import recoverSlice from "./recoverSlice";
import listSlice from "./listSlice";

const persistConfig = {
  key: "root",
  storage: new CookieStorage(Cookies),
  // whitelist: ["user"]
};

const rootReducer = combineReducers({
  user: userSlice,
  enroll: enrollSlice,
  recover: recoverSlice,
  list: listSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
