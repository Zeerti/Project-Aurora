import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addSearchHistory,
  clearSearchHistory,
  setCurrentInput,
  setSearchResults,
} from "../../actions/searchActions";

import Results from "./Results";

function Search(props) {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [searchHistory, setSearchHistory] = useState([""]);

  const onSubmit = (e) => {
    e.preventDefault();
    props.addSearchHistory(e.target[0].value);
  };

  //   Update local state if redux searchHistory changed
  useEffect(() => {
    setSearchHistory(props.search.searchHistory);
  }, [props.search.searchHistory]);

  //   Update local state if redux currentInput changed
  useEffect(() => {
    setUserInput(props.search.searchInput);
  }, [props.search.currentInput]);

  //   Update local state if redux searchResults changed
  useEffect(() => {
    setSearchResults(props.search.searchResults);
  }, [props.search.searchResults]);

  return (
    <div className="container">
      <div className="col">
        <div className="row">
          {/* Search Field */}
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                className="white-text"
                value={userInput}
                type="text"
                id="username"
                placeholder="Search input goes here"
                onChange={(e) => {
                  props.setCurrentInput(e.target.value);
                  setUserInput(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3 center"
            >
              Search
            </button>
          </form>
        </div>
        <Results />
      </div>
    </div>
  );
}

Search.propTypes = {
  currentInput: PropTypes.string.isRequired,
  searchHistory: PropTypes.array.isRequired,
  searchResults: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  search: state.search,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addSearchHistory: (userInput) => dispatch(addSearchHistory(userInput)),
    clearSearchHistory: () => dispatch(clearSearchHistory()),
    setCurrentInput: (userInput) => dispatch(setCurrentInput(userInput)),
    setSearchResults: (userInput) => dispatch(setSearchResults(userInput)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
