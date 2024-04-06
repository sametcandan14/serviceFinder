import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //TODO burayı doldur

  token: localStorage.getItem("authToken"),
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      console.log(state);
      console.log(action);
      localStorage.setItem("authToken", action.payload);
    },

    setUser: (state, action) => {
      state.user = action.payload;
      console.log(state);
      console.log(action);
    },

    removeToken: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("authToken");
    },
  },
});

export const { setToken, removeToken, setUser } = authSlice.actions;

export default authSlice.reducer;
