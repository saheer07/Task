import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import studentsReducer from "./features/studentsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentsReducer,
  },
});