import React, { useEffect } from "react";
import { connect } from "react-redux";
import LocationTable from "./LocationTable";

function truncate(str, n) {
  if (str && n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  } else {
    return "ERROR";
  }
}

// TODO: When clicking on card expand to be 100% container width
// TODO: Then remove the truncate function to display fully

function Results(props) {
  useEffect(() => {
    // TODO: Calling this funtion to much might be expensive. Ensure it only runs once per search
    window.M.AutoInit();
  }, [props.search.searchResults]);

  if (props.results && props.results.length !== 0) {
    const locationMap = props.results.map((location) => {
      return (
        <div className="col s12 m12 l12 xl6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                {truncate(location.LocationName, 37)}
              </span>
              <div className="divider"></div>
              <p>
                <b>Location ID:</b>{" "}
                <span className="grey-text text-lighten-3">
                  {truncate(location.LocationID, 40)}
                </span>
                <br />
                <b>Server:</b>{" "}
                <span className="grey-text text-lighten-3">
                  {location.Server}
                </span>
                <br />
                <b>GroupName:</b>{" "}
                <span className="grey-text text-lighten-3">
                  {truncate(location.GroupName, 40)}
                </span>
                <br />
                <b>GroupID:</b>{" "}
                <span className="grey-text text-lighten-3">
                  {location.GroupID}
                </span>
                <br />
                <b>DB ID:</b>{" "}
                <span className="grey-text text-lighten-3">
                  {truncate(location.LocationDatabase, 49)}
                </span>
                <br />
              </p>
              <div className="card-action">
                <ul className="collapsible">
                  <li>
                    <div className="collapsible-header blue-grey darken-2 white-text">
                      <i className="material-icons">filter_drama</i> Admin
                      Portal
                    </div>
                    <div className="collapsible-body">
                      <a href={location.ToolsURL}>Admin Portal</a>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header blue-grey darken-2 white-text">
                      <i className="material-icons">devices</i> Hardware
                    </div>
                    <div className="collapsible-body">
                      <LocationTable tableType="hardware" />
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header blue-grey darken-2 white-text">
                      <i className="material-icons">api</i> Software
                      Integrations
                    </div>
                    <div className="collapsible-body">
                      <LocationTable tableType="integrations" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row">{locationMap}</div>;
  } else {
    return (
      <div className="row">No Results found, please try your search again</div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  search: state.search,
});

export default connect(mapStateToProps)(Results);
