import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
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
      const res = axios.post("https://education-y04h.onrender.com/auth/login", data);
      toast.promise(
        res,
        {
          loading: 'Loading',
          success: (data) => {
            console.log(data);
            localStorage.setItem("auth_token", data.data.token);
            navigate("/dashboard")
            return `Successfully Logged In`
          },
          error: (err) => `${err.response.data}`,
        }
      );

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
          onClick={login}
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
