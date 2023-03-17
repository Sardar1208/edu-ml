import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function login() {
    let data = {
      username: username,
      password: password,
    };

    const req = await fetch("https://education-y04h.onrender.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    let res = req.json();
    console.log(res);
    return res;
  }

  return (
    <div className="login-parent">
      <div className="login-modal">
        <div className="login-heading">Login</div>

        <div className="login-input-parent">
          <div className="login-input-label">Username</div>
          <input
            type="text"
            id="username"
            name="username"
            className="input-field"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="login-input-parent">
          <div className="login-input-label">Password</div>
          <input
            type="password"
            id="password"
            name="password"
            className="input-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          className="login-btn"
          onClick={async () => {
            let res = await login();
            console.log(res.data);
            if(res.data) {
              navigate("/test");
            }
          }}
        >
          Login
        </button>
        <div className="login-signup-options">
          <span>Dont have an Account?</span>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
