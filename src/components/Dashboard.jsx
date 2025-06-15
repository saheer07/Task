import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUser,
} from "../features/authSlice";
import {
  addStudent,
  deleteStudent,
  toggleCheckbox,
  blockStudent,
  editStudent,
} from "../features/studentsSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!name || !age) return;

    if (editId) {
      dispatch(editStudent({ id: editId, name, age }));
      setEditId(null);
    } else {
      dispatch(
        addStudent({ id: Date.now(), name, age, checked: false, blocked: false })
      );
    }

    setName("");
    setAge("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Dashboard</h2>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
      <br />
      <br />
      <input
      type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
      type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleAdd}>{editId ? "Update" : "Add"} Student</button>

      {students.map((s) => (
        <div
          key={s.id}
          style={{
            backgroundColor: s.checked ? "green" : "blue",
            padding: "10px",
            margin: "10px 0",
            color: "white",
            opacity: s.blocked ? 0.5 : 1,
          }}
        >
          <p>Name: {s.name}</p>
          <p>Age: {s.age}</p>
          {s.blocked && <p style={{ color: "yellow" }}>Blocked</p>}

          <input
            type="checkbox"
            checked={s.checked}
            onChange={() => dispatch(toggleCheckbox(s.id))}
            disabled={s.blocked}
          />

          <button
            onClick={() => {
              setName(s.name);
              setAge(s.age);
              setEditId(s.id);
            }}
            disabled={s.blocked}
          >
            Edit
          </button>

          <button onClick={() => dispatch(deleteStudent(s.id))}>Delete</button>

          <button onClick={() => dispatch(blockStudent(s.id))}>
            {s.blocked ? "Unblock" : "Block"}
          </button>
        </div>
      ))}
    </div>
  );
}
