import React from "react";
import { connect } from "react-redux";

function LocationTable(props) {
  switch (props.tableType) {
    case "hardware":
      return (
        <ul className="collection with-header blue-grey white-text">
          <li className="collection-header blue-grey darken-2">
            <h4>Hardware Integrations</h4>
          </li>
          <li className="collection-item blue-grey darken-2">
            <b>Register:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Caller ID:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>External Kitchen:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>OnPremPaging:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>OCD:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>SMS Provider:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Printers:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Payment Devices:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Scales:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Biometrics:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Coin Dispenser:</b>
          </li>
        </ul>
      );
    case "integrations":
      return (
        <ul className="collection with-header blue-grey white-text">
          <li className="collection-header blue-grey darken-2">
            <h4>Software Integrations</h4>
          </li>
          <li className="collection-item blue-grey darken-2">
            <b>Credit Processor:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>External Processor:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Gift Processor:</b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Loyalty Provider: </b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Prepaid Item: </b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>Promotion Provider: </b>
          </li>
          <li className="collection-item blue-grey darken-2 white-text">
            <b>API Accounts:</b>
          </li>
        </ul>
      );
    default:
      break;
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps)(LocationTable);
