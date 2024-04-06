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
      state.token = action.payload;
      console.log(state);
      console.log(action);
    },

    setUser: (state, action) => {
      state.user = action.payload;
      console.log(state);
      console.log(action);
    },

    removeToken: (state) => {},
  },
});

export const { setToken, removeToken, setUser } = authSlice.actions;

export default authSlice.reducer;
