import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //TODO burayı doldur

  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.users = action.payload;
    },

    removeToken: (state) => {},
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
