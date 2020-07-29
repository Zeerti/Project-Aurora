import React, { useEffect } from "react";
import { connect } from "react-redux";
import LocationTable from "./LocationTable";

let tempData = [
  {
    Server: "ADMIN3",
    LocationID: "73219a9f-2bea-476a-b5dc-0008ed8c3c4c",
    LocationName: "Columbus Zoo West - Food Court - Congo Rivr Chickn",
    LocationDatabase: "POS_Columbus_Zoo_West__Food_Court__Congo_River_Chicken",
    GroupID: "568f28ff-aeae-48da-b911-0f53f5be0ee6",
    GroupName: "Columbus Zoo",
    ToolsURL:
      "https://ADMIN3.brinkpos.net/Admin/LocationTools/?id=73219a9f-2bea-476a-b5dc-0008ed8c3c4c&gid=568f28ff-aeae-48da-b911-0f53f5be0ee6",
  },

  {
    Server: "ADMIN3",
    LocationID: "e3dd61ff-2379-48d2-9af1-0061bbd38753",
    LocationName: "Brink API Toronto Kyle Lab 2 API3",
    LocationDatabase: "POS_Brink_API_Toronto_Kyle_Lab_2_API3",
    GroupID: "789f8403-fb94-4fc1-b68b-fd1610827938",
    GroupName: "Brink API Toronto",
    ToolsURL:
      "https://ADMIN3.brinkpos.net/Admin/LocationTools/?id=e3dd61ff-2379-48d2-9af1-0061bbd38753&gid=789f8403-fb94-4fc1-b68b-fd1610827938",
  },
];
// key={location.LocationID}
const locationMap = tempData.map((location) => {
  return (
    <div className="col s12 m8 l6 xl6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{location.LocationName}</span>
          <div className="divider pb"></div>
          <p>
            <b>Location ID:</b>{" "}
            <span className="grey-text text-lighten-3">
              {location.LocationID}
            </span>
            <br />
            <b>Server:</b>{" "}
            <span className="grey-text text-lighten-3">{location.Server}</span>
            <br />
            <b>GroupName:</b>{" "}
            <span className="grey-text text-lighten-3">
              {location.GroupName}
            </span>
            <br />
            <b>GroupID:</b>{" "}
            <span className="grey-text text-lighten-3">{location.GroupID}</span>
            <br />
            <b>DB ID:</b>{" "}
            <span className="grey-text text-lighten-3">
              {location.LocationDatabase}
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
    console.log("AutoInit");
    window.M.AutoInit();
  }, [props.search.searchResults]);
  return (
    // Static Test
    <div className="test">
      <div className="row">
        {locationMap}

        {/* Procedural Generation */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  search: state.search,
});

export default connect(mapStateToProps)(Results);
