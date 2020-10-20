import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

function Dashboard(props) {
  let onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
    props.history.push("/login");
  };

  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b> {props.auth.user.name.split(" ")[0]}
            <p className="flow-text grey-text text-darken-1">
              Welcome to{" "}
              <span style={{ fontFamily: "monospace" }}>Project Aurora</span>
              <br />
              <br />
              What would you like to do today?
            </p>
          </h4>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem",
            }}
            className="btn btn-large waves-effect waves-light hoverable bg-nord15"
            onClick={onLogoutClick}
          >
            Logout
          </button>
          <a href="/search">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginLeft: "100px",
              }}
              className="btn btn-large waves-effect waves-light hoverable bg-nord15"
            >
              Search
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
