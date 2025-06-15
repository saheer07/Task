import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/authSlice";

export default function Register({ onRegister }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (email && password) {
      dispatch(registerUser({ email, password }));
      onRegister();
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
