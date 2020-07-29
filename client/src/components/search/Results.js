import React, { useEffect } from "react";
import { connect } from "react-redux";
import LocationTable from "./LocationTable";

let tempData = [
  {
    Server: "ADMIN3",
    LocationID: "891336147-2bea-476a-b5dc-0008ed8c3c4c",
    LocationName: "Columbus Mumbus Twister - Food Court - Congo Rivr Chickn",
    LocationDatabase: "Mumbus_West__Food_Court__Congo_River_Chicken",
    GroupID: "913614755-aeae-48da-fe98-0f53f5be0ee6",
    GroupName: "Columbus Mumbus",
    ToolsURL: "https://website.url.gov.com",
  },

  {
    Server: "ADMIN3",
    LocationID: "891336147-2bea-476a-b5dc-0008ed8c3c4c",
    LocationName: "Columbus Mumbus Twister - Food Court - Congo Rivr Chickn",
    LocationDatabase: "Mumbus_West__Food_Court__Congo_River_Chicken",
    GroupID: "913614755-aeae-48da-fe98-0f53f5be0ee6",
    GroupName: "Columbus Mumbus",
    ToolsURL: "https://website.url.gov.com",
  },
  {
    Server: "ADMIN3",
    LocationID: "891336147-2bea-476a-b5dc-0008ed8c3c4c",
    LocationName: "Columbus Mumbus Twister - Food Court - Congo Rivr Chickn",
    LocationDatabase: "Mumbus_West__Food_Court__Congo_River_Chicken",
    GroupID: "913614755-aeae-48da-fe98-0f53f5be0ee6",
    GroupName: "Columbus Mumbus",
    ToolsURL: "https://website.url.gov.com",
  },
  {
    Server: "ADMIN3",
    LocationID: "891336147-2bea-476a-b5dc-0008ed8c3c4c",
    LocationName: "Columbus Mumbus Twister - Food Court - Congo Rivr Chickn",
    LocationDatabase: "Mumbus_West__Food_Court__Congo_River_Chicken",
    GroupID: "913614755-aeae-48da-fe98-0f53f5be0ee6",
    GroupName: "Columbus Mumbus",
    ToolsURL: "https://website.url.gov.com",
  },
];

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

// TODO: When clicking on card expand to be 100% container width
// TODO: Then remove the truncate function to display fully
const locationMap = tempData.map((location) => {
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
            <span className="grey-text text-lighten-3">{location.Server}</span>
            <br />
            <b>GroupName:</b>{" "}
            <span className="grey-text text-lighten-3">
              {truncate(location.GroupName, 40)}
            </span>
            <br />
            <b>GroupID:</b>{" "}
            <span className="grey-text text-lighten-3">{location.GroupID}</span>
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
                  <i className="material-icons">filter_drama</i> Admin Portal
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
                  <i className="material-icons">api</i> Software Integrations
                </div>
                <div className="collapsible-body">
                  <LocationTable tableType="integrations" />
                </div>
              </li>
            </ul>

            <a href="#">Other Link</a>
          </div>
        </div>
      </div>
    </div>
  );
});

function Results(props) {
  useEffect(() => {
    // TODO: Calling this funtion to much might be expensive.
    window.M.AutoInit();
  }, [props.search.searchResults]);

  return <div className="row">{locationMap}</div>;
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  search: state.search,
});

export default connect(mapStateToProps)(Results);
