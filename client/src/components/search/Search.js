import React, { userState, useEffect, useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Search(props) {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [recentResults, setRecentResults] = useState([""]);

  onsubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("useEffect Triggered in Search.JS line 15");
  }, [userInput]);

  return (
    <Fragment>
      <h1>HELLO TEST</h1>
      <h2>Double Hello</h2>
    </Fragment>
  );
}

Search.propTypes = {
  userInput: PropTypes.string.isRequired,
  searchResults: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(Search));
