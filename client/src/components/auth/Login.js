import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    props.loginUser(userData); // Since we handled the redirect within the component, we don't need to pass in the history as a param.
  };

  const userData = {
    username: username,
    password: password,
  };

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }

    if (props.errors) {
      setErrors(props.errors);
    }
  }, [props]);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "4rem" }}>
        <Link to="/" className="btn-flat waves-effect white-text">
          <i className="material-icons left white-text">keyboard_backspace</i>{" "}
          Back to home
        </Link>
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>Login</b> below
          </h4>
          <p className="grey-text text-darken-1">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
        <form noValidate onSubmit={onSubmit}>
          {/* Username Field */}
          <div className="input-field col s12">
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              error={errors.username}
              type="text"
              id="username"
              className={classnames("", {
                invalid: errors.username | errors.loginFailure,
              })}
            />
            <label htmlFor="username">Username</label>
            <span className="red-text">{errors.username}</span>
          </div>
          {/* Password Field */}
          <div className="input-field col s12">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              error={errors.password}
              id="password"
              className={classnames("", {
                invalid: errors.password,
              })}
            />
            <label htmlFor="password">Password</label>
            <span className="red-text">{errors.password}</span>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
