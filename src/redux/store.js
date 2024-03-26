import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";

const store = configureStore({
  reducer: {
    //TODO state properties

    categoryState: categoryReducer,
  },
});

export default store;
