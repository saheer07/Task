import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((s) => s.id !== action.payload);
    },
    toggleCheckbox: (state, action) => {
      const student = state.students.find((s) => s.id === action.payload);
      if (student) student.checked = !student.checked;
    },
   blockStudent: (state, action) => {
  const student = state.students.find((s) => s.id === action.payload);
  if (student) {
    student.blocked = !student.blocked;
  }
},

    editStudent: (state, action) => {
      const { id, name, age } = action.payload;
      const student = state.students.find((s) => s.id === id);
      if (student) {
        student.name = name;
        student.age = age;
      }
    },
  },
});

export const { addStudent, deleteStudent, toggleCheckbox, blockStudent, editStudent } = studentsSlice.actions;
export default studentsSlice.reducer;