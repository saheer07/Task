import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}