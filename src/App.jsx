// File: src/App.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const user = useSelector((state) => state.auth.loggedInUser);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {!user ? (
        showLogin ? (
          <>
            <Login />
            <p>
              Don't have an account? <button onClick={() => setShowLogin(false)}>Register</button>
            </p>
          </>
        ) : (
          <>
            <Register onRegister={() => setShowLogin(true)} />
            <p>
              Already have an account? <button onClick={() => setShowLogin(true)}>Login</button>
            </p>
          </>
        )
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
