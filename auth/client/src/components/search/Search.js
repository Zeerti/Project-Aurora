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
  const [formInputLocName, setFormInputLocName] = useState("");
  const [formInputLID, setFormInputLID] = useState("");
  const [formInputServer, setFormInputServer] = useState("");
  const [formInputGroupName, setFormInputGroupName] = useState("");
  const [formInputGID, setFormInputGID] = useState("");
  const [formInputDBID, setFormInputDBID] = useState("");
  const [searchResults, setSearchResults] = useState(false);
  const [searchHistory, setSearchHistory] = useState([""]);

  if (searchableData === 0 || searchableData.length < 2) {
    database = require("../../searchableData/LocationsAndGroups.json");
    setSearchableData(database);
    stringDB = JSON.stringify(database);
  }

  const onSubmit = (e) => {
    setSearchResults(false);
    e.preventDefault();
    props.addSearchHistory(e.target[0].value);

    searchAllData(formInputLocName, searchableData).then((matched) => {
      setSearchResults(matched);
      window.M.AutoInit();
    });

    console.warn(`SEARCH RESULTS SET TO: ${searchResults.length}`);
  };

  const onClick = (e) => {
    setSearchResults(false);
    searchAllData(formInputLocName, searchableData).then((matched) => {
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

  // //   Update local state if redux searchHistory changed
  // useEffect(() => {
  //   setSearchHistory(props.search.searchHistory);
  // }, [props.search.searchHistory]);

  //   Update local state if redux currentInput changed
  useEffect(() => {
    setFormInputLocName(props.search.searchInput);
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = window.M.FormSelect.init(elems);
      console.log(instances);
    })

    

  }, [props.search.currentInput]);

  // Update local state if redux searchResults changed
  useEffect(() => {
    setSearchResults(props.search.searchResults);
  }, [props.search.searchResults]);

  if (searchResults.length >= 1) {
    // enableFullSearch allows more than 100 items to be rendered in the results component.
    // Large results causes huge performance issues
    resultComponent = (
      <Results results={searchResults} enableFullSearch={false} /> 
    );
  } else {
    resultComponent = false;
  }
  return (


    <div className="container">
      <form noValidate onSubmit={onSubmit}>
        <div className="card blue-grey darken-1">
          <div className="card-content">
            <span className="card-title">Enter Search Details Below</span>
            <div className="divider"></div>
            <div className="row">
              <div className="input-field col s12 l6 xl6">
                <input
                    className=""
                    value={formInputLocName}
                    type="text"
                    id="formLocName"
                    placeholder="Location Name"
                    onChange={(e) => {
                      props.setCurrentInput(e.target.value);
                      setFormInputLocName(e.target.value);
                    }}
                  />
                  <input
                    className=""
                    value={formInputLID}
                    type="text"
                    id="formLID"
                    placeholder="Location ID"
                    onChange={(e) => {
                      setFormInputLID(e.target.value);
                    }}
                  />
                  <input
                    className=""
                    value={formInputDBID}
                    type="text"
                    id="formDBID"
                    placeholder="Database ID"
                    onChange={(e) => {
                      setFormInputDBID(e.target.value);
                    }}
                  />
              </div>
              <div className="input-field col s12 l6 xl6">
                <select multiple>
                  <option value="" disabled>Select Admin Portals</option>
                  <option value ="all">All</option>
                  <option value="1">Admin 1</option>
                  <option value="2">Admin 2</option>
                  <option value="3">Admin 3</option>
                  <option value="1">Admin 4</option>
                  <option value="2">Admin 5</option>
                  <option value="3">Admin 6</option>
                  <option value="1">Admin 7</option>
                  <option value="2">Admin 8</option>
                  <option value="3">Admin 9</option>
                  <option value="1">Admin 10</option>
                  <option value="2">Admin 11</option>
                  <option value="3">Admin 12</option>
                  <option value="1">Admin 13</option>
                  <option value="2">Admin 14</option>
                  <option value="3">Admin 15</option>
                  <option value="1">Admin 16</option>
                  <option value="2">Admin 17</option>
                  <option value="3">Admin 18</option>
                  <option value="1">Admin 19</option>
                  <option value="2">Admin 20</option>
                </select>
                {/* <input
                  className=""
                  value={formInputServer}
                  type="text"
                  id="formServer"
                  placeholder="Admin Portal Server"
                  onChange={(e) => {
                    setFormInputServer(e.target.value);
                  }}
                /> */}
                <input
                  className=""
                  value={formInputGroupName}
                  type="text"
                  id="formGroupName"
                  placeholder="Group Name"
                  onChange={(e) => {
                    setFormInputGroupName(e.target.value);
                  }}
                />
                <input
                  className=""
                  value={formInputGID}
                  type="text"
                  id="formGID"
                  placeholder="Group ID"
                  onChange={(e) => {
                    setFormInputGID(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <button
        type="submit"
        className="btn btn-large waves-effect waves-light hoverable accent-3 bg-nord15 center"
        onClick={onClick}
      >
        Search
      </button>

      {/* Look up conditional rendering for React and don't render if search hasn't been done yet */}
      {resultComponent}
    </div>

    // <div className="container">
    //   <div className="col">
    //     <div className="row">
    //       {/* Search Field */}
    //       <form noValidate onSubmit={onSubmit}>
    //         <div className="input-field col s12">
    //           <input
    //             className="white-text"
    //             value={formInputLocName}
    //             type="text"
    //             id="username"
    //             placeholder="What are we looking for today?"
    //             onChange={(e) => {
    //               props.setCurrentInput(e.target.value);
    //               setFormInputLocName(e.target.value);
    //             }}
    //           />
    //         </div>
    //       </form>
    //     </div>
    //   </div>

    //   <button
    //     type="submit"
    //     className="btn btn-large waves-effect waves-light hoverable accent-3 bg-nord15 right"
    //     onClick={onClick}
    //   >
    //     Search
    //   </button>

    //   {/* Look up conditional rendering for React and don't render if search hasn't been done yet */}
    //   {resultComponent}
    // </div>
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
    addSearchHistory: (formInputLocName) => dispatch(addSearchHistory(formInputLocName)),
    clearSearchHistory: () => dispatch(clearSearchHistory()),
    setCurrentInput: (formInputLocName) => dispatch(setCurrentInput(formInputLocName)),
    setSearchResults: (formInputLocName) => dispatch(setSearchResults(formInputLocName)),
    loadSearchableData: (data) => dispatch(loadSearchableData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
