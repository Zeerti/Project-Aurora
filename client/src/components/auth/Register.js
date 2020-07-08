import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({}); // THIS LIKELY IS BUGGED AND NOT CORRECTLY IMPLEMENTED BELOW

  onsubmit = (e) => {
    e.preventDefault();
  };

  const newUser = {
    name: name,
    email: email,
    password: password,
    password2: password2,
    username: username,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={onsubmit}>
            {/* Name Field */}
            <div className="input-field col s12">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                error={errors.name}
                id="name"
                type="text"
              />
              <label htmlFor="name">Name</label>
            </div>

            {/* Email Field */}
            <div className="input-field col s12">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={errors.email}
                id="email"
                type="email"
              />
              <label htmlFor="email">Email</label>
            </div>

            {/* Password Field */}
            <div className="input-field col s12">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                error={errors.password}
                id="password"
                type="password"
              />
              <label htmlFor="password">Password</label>
            </div>

            {/* Password2 Field */}
            <div className="input-field col s12">
              <input
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
                error={errors.password2}
                id="password2"
                type="password"
              />
              <label htmlFor="password2">Confirm Password</label>
            </div>

            {/* Username Field */}
            <div className="input-field col s12">
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                error={errors.username}
                id="username"
                type="text"
              />
              <label htmlFor="password2">Username</label>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col s8 offset-s2">
  //           <Link to="/" className="btn-flat wave-effect">
  //             <i className="material-icons left">keyboard_backspace</i> Back to
  //             home
  //           </Link>
  //           <div className="col s12" style={{ paddingLeft: "11.250px" }}>
  //             <h4>
  //               <b>Register</b> below
  //             </h4>
  //             <p className="grey-text text-darken-1">
  //               Already have an account? <Link to="/login">Log in</Link>
  //             </p>
  //           </div>
  //           <form noValidate onSubmit={onsubmit}>
  //             {/* Username Field */}
  //             <div className="input-field col s12">
  //               <input
  //                 type="text"
  //                 onChange={(e) => setUsername(e.target.value)}
  //                 value={username}
  //                 error={errors.username}
  //                 id="username"
  //               />
  //               <label htmlFor="username">Username</label>
  //             </div>
  //             {/* Name Field */}
  //             <div className="input-field col s12">
  //               <input
  //                 type="text"
  //                 onChange={(e) => setName(e.target.value)}
  //                 value={name}
  //                 error={setErrors(errors.name)}
  //                 id="name"
  //               />
  //               <label htmlFor="name">Name</label>
  //             </div>
  //             {/* Email Field */}
  //             <div className="input-field col s12">
  //               <input
  //                 type="email"
  //                 onChange={(e) => setEmail(e.target.value)}
  //                 value={email}
  //                 error={setErrors(errors.email)}
  //                 id="email"
  //               />
  //               <label htmlFor="email">Email</label>
  //             </div>
  //             {/* Password Field */}
  //             <div className="input-field col s12">
  //               <input
  //                 type="password"
  //                 onChange={(e) => setPassword(e.target.value)}
  //                 value={password}
  //                 error={setErrors(errors.password)}
  //                 id="password"
  //               />
  //               <label htmlFor="password">Password</label>
  //             </div>
  //             {/* Password2 Field */}
  //             <div className="input-field col s12">
  //               <input
  //                 type="password"
  //                 onChange={(e) => setPassword2(e.target.value)}
  //                 value={password2}
  //                 error={setErrors(errors.password2)}
  //                 id="password2"
  //               />
  //               <label htmlFor="password2">Confirm Password</label>
  //             </div>
  //             <div className="col s12" style={{ paddingLeft: "11.250px" }}>
  //               <button
  //                 style={{
  //                   width: "150px",
  //                   borderRadius: "3px",
  //                   letterSpacing: "1.5px",
  //                   marginTop: "1rem",
  //                 }}
  //                 type="submit"
  //                 className="btn btn-large waves-effect waves-light hoverable blue accent-3"
  //               >
  //                 Sign up
  //               </button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default Register;
