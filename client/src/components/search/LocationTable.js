import React, { useEffect } from "react";
import { connect } from "react-redux";

function LocationTable(props) {
  switch (props.tableType) {
    case "hardware":
      return (
        <ul class="collection with-header blue-grey white-text">
          <li class="collection-header blue-grey darken-2">
            <h4>Hardware Integrations</h4>
          </li>
          <li class="collection-item blue-grey darken-2">
            <b>Register:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Caller ID:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>External Kitchen:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>On Prem Paging:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Order Confirmation Display</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>SMS Provider:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Printers:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Payment Devices:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Scales:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Biometrics:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Coin Dispenser:</b>
          </li>
        </ul>
      );
    case "integrations":
      return (
        <ul class="collection with-header blue-grey white-text">
          <li class="collection-header blue-grey darken-2">
            <h4>Software Integrations</h4>
          </li>
          <li class="collection-item blue-grey darken-2">
            <b>Credit Processor:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>External Processor:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Gift Processor:</b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Loyalty Provider: </b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Prepaid Item: </b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
            <b>Promotion Provider: </b>
          </li>
          <li class="collection-item blue-grey darken-2 white-text">
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
