import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addSearchHistory,
  clearSearchHistory,
  setCurrentInput,
  setSearchResults,
  loadSearchableData,
} from "../../actions/searchActions";

import Results from "./Results";
import searchAllData from "../../utils/searchDB";

let database;
let stringDB;
let resultComponent;

// Load data in from local CSV
// TODO: Alter this to pull dynamically from O365 Sharepoint

//let csv = 42;
//let searchableData = csvToJSON(csv);

// TODO: Load CSV, Convert to JSON, Load into Redux State(searchData), Load from redux into local state(searchableData)
function Search(props) {
  const [searchableData, setSearchableData] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState(false);
  const [searchHistory, setSearchHistory] = useState([""]);

  if (searchableData === 0 || searchableData.length < 2) {
    database = require("../../searchableData/LocationsAndGroups.json");
    setSearchableData(database);
    stringDB = JSON.stringify(database);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    props.addSearchHistory(e.target[0].value);

    searchAllData(userInput, searchableData).then((matched) => {
      setSearchResults(matched);
      window.M.AutoInit();
    });
  };

  // Update local state when DB is loaded
  useEffect(() => {
    if (searchableData !== 0) {
      // props.loadSearchableData(database);
      setSearchableData(stringDB);
    }
  }, [searchableData]);

  //   Update local state if redux searchHistory changed
  useEffect(() => {
    setSearchHistory(props.search.searchHistory);
  }, [props.search.searchHistory]);

  //   Update local state if redux currentInput changed
  useEffect(() => {
    setUserInput(props.search.searchInput);
  }, [props.search.currentInput, props.search.searchInput]);

  //   Update local state if redux searchResults changed
  useEffect(() => {
    setSearchResults(props.search.searchResults);
  }, [props.search.searchResults]);

  if (searchResults) {
    console.log("SEARCH RESULTS");
    console.log(searchResults);

    resultComponent = (
      <Results results={searchResults} enableFullSearch={true} />
    );
  }
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
                placeholder="What are we looking for today?"
                onChange={(e) => {
                  props.setCurrentInput(e.target.value);
                  setUserInput(e.target.value);
                }}
              />
            </div>
          </form>
          <button
            type="submit"
            className="btn btn-large waves-effect waves-light hoverable bg-nord15"
          >
            Search
          </button>
        </div>
      </div>

      {/* Look up conditional rendering for React and don't render if search hasn't been done yet */}
      {resultComponent}
    </div>
  );
}

Search.propTypes = {
  loadSearchableData: PropTypes.func.isRequired,
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
    loadSearchableData: (data) => dispatch(loadSearchableData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
