import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //TODO burayı doldur

  categories: [],
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
