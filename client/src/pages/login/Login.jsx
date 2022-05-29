import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import "./Login.styles.css";
import { AuthContext } from "../../context/AuthContext";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, dispatch, isFetching, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
              type="email"
              placeholder="Email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">
              {isFetching ? (
                <Box className="loginLoadingMui" sx={{ display: "flex" }}>
                  <CircularProgress color="warning" />
                </Box>
              ) : (
                "Log In"
              )}
            </button>
            {!user && <span className="loginForgot">Forgot Password?</span>}

            <button className="loginRegisterButton" disabled={isFetching}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
