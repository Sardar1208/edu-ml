import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function verify() {
    if (username.length <= 0 || password.length <= 0) {
      setError("*All fields are required");
      return false;
    } else if (password !== rePassword) {
      setError("*Passwords do not match");
      return false;
    } else if (username.length < 7) {
      setError("*Username must be more that 7 characters");
      return false;
    }

    setError("");
    return true;
  }

  async function register() {
    let data = {
      "username": username,
      "password": password,
    };

    const res = await fetch(
      "https://education-y04h.onrender.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    console.log(await res.text());
    return await res.text();
  }

  return (
    <div className="signup-parent">
      <div className="signup-modal">
        <div className="signup-heading">Register</div>

        <div className="signup-input-parent">
          <div className="signup-input-label">Username</div>
          <input
            type="text"
            id="username"
            name="username"
            className="input-field"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="signup-input-parent">
          <div className="signup-input-label">Password</div>
          <input
            type="password"
            id="password"
            name="password"
            className="input-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="signup-input-parent">
          <div className="signup-input-label">Confirm Password</div>
          <input
            type="password"
            id="repassword"
            name="repassword"
            className="input-field"
            value={rePassword}
            onChange={(event) => setRePassword(event.target.value)}
          />
        </div>

        <span className="signup-error">{error}</span>

        <button
          className="signup-btn"
          onClick={async () => {
            if (verify()) {
              await register();
            }
          }}
        >
          SignUp
        </button>

        <div className="signup-signup-options">
          <span>Already have an Account?</span>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
