import { createSlice } from "@reduxjs/toolkit";


const loadState = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;
  return { users, loggedInUser };
};

const initialState = loadState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    loginUser: (state, action) => {
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user) {
        state.loggedInUser = user;
        localStorage.setItem("loggedInUser", JSON.stringify(user));
      } else {
        alert("Invalid credentials");
      }
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
