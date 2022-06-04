import { useRef, useState } from "react";
import "./Register.styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const email = useRef();

  const [error, setError] = useState(false);

  const registerUser = async () => {
    setError(false);
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      await axios.post("http://localhost:8800/api/auth/register", user);
      navigate("/login");
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    password.current.value !== passwordAgain.current.value
      ? setError(true)
      : registerUser();
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Celebrity Social</h3>
          <span className="loginText">
            All the celebrities from past to future connects together here at
            CelebritySocial!
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              className="loginInput"
              ref={username}
              required
              type="text"
            />
            <input
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
              type="email"
            />
            <input
              placeholder="Password"
              className="loginInput"
              ref={password}
              required
              type="password"
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              ref={passwordAgain}
              required
              type="password"
            />
            {error && <span className="loginError">Password don't match</span>}
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button
              className="loginRegisterButton"
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
