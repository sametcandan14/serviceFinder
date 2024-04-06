import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    //TODO state properties
    authState: authReducer,
    categoryState: categoryReducer,
  },

  // a non-serializable value was detected in the state

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
