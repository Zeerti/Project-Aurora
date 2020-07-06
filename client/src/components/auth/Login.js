import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  onSubmit = (e) => {
    e.preventDefault();
  };

  const userData = {
    username: username,
    password: password,
  };

  console.log(userData);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "4rem" }}>
        <Link to="/" className="btn-flat waves-effect">
          <i className="material-icons left">keyboard_backspace</i> Back to home
        </Link>
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>Login</b> below
          </h4>
          <p className="grey-text text-darken-1">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
        <form noValidate onSubmit="onSubmit">
          <div className="input-field col s12">
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              error={errors.username}
              type="text"
              id="username"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s12">
            <input
              type="password"
              onchange={setUsername((e) => e.target.value)}
              value={password}
              error={errors.password}
              id="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <button
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
